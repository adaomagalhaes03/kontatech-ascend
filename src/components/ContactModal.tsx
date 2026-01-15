import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
Novo contacto via website

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:kontatech84@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contacto via Website')}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {isSuccess ? (
              'Mensagem Enviada!'
            ) : (
              <>
                <MessageCircle className="w-6 h-6 text-gold" />
                Fale Connosco
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {isSuccess 
              ? 'Obrigado pelo contacto! Responderemos em breve.' 
              : 'Envie-nos uma mensagem e responderemos o mais breve possível.'
            }
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <CheckCircle className="w-20 h-20 text-gold mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
              <p className="text-muted-foreground mb-6">
                Entraremos em contacto consigo em breve.
              </p>
              <motion.button
                onClick={handleClose}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fechar
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4 mt-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nome Completo *</Label>
                  <Input
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="João Silva"
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@empresa.com"
                    className="bg-background/50 border-white/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Telefone</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+244 XXX XXX XXX"
                    className="bg-background/50 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Assunto *</Label>
                  <Input
                    id="contact-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Informação sobre serviços"
                    className="bg-background/50 border-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Mensagem *</Label>
                <Textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escreva a sua mensagem aqui..."
                  className="bg-background/50 border-white/10 min-h-[120px]"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    A enviar...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
