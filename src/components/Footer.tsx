import { motion } from 'framer-motion';
import { Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const footerLinks = {
  services: [
    { name: 'Contabilidade Digital', href: '#servicos' },
    { name: 'Gestão Financeira', href: '#servicos' },
    { name: 'Consultoria', href: '#servicos' },
    { name: 'Sistema SICGE', href: '#servicos' },
  ],
  company: [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Processo', href: '#processo' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Criar Conta', href: '/admin/register' },
  ],
  social: [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-card/50 border-t border-white/5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img src={logo} alt="Kontatech Partners" className="h-12 w-auto rounded-md mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Estratégia, precisão e confiança para o seu crescimento. 
              A sua parceira em contabilidade digital e transformação empresarial.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold text-sm transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:kontatech84@gmail.com" className="hover:text-gold transition-colors">kontatech84@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="tel:+244933177856" className="hover:text-gold transition-colors">+244 933 177 856</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Talatona Via A2, Luanda, Angola</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Kontatech Partners. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de Serviço</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
