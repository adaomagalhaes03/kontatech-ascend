import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { PlanModal } from './PlanModal';

const plans = [
  {
    name: 'Plano Básico',
    price: '350.000',
    period: '/mês',
    description: 'Serviços essenciais de contabilidade digital.',
    features: [
      'Acesso limitado ao SICGE',
      'Contabilidade digital básica',
      'Relatórios mensais',
      'Suporte por email',
    ],
    popular: false,
  },
  {
    name: 'Plano Profissional',
    price: '650.000',
    period: '/mês',
    description: 'Gestão financeira + suporte empresarial.',
    features: [
      'Consultoria mensal inclusa',
      'Gestão financeira integrada',
      'Relatórios personalizados',
      'Suporte prioritário',
      'Acesso completo ao SICGE',
    ],
    popular: true,
  },
  {
    name: 'Plano Premium',
    price: '950.000',
    period: '/mês',
    description: 'Gestão completa + relatórios e consultoria estratégica.',
    features: [
      'Acesso total ao SICGE',
      'Suporte 24h',
      'Consultoria estratégica',
      'Auditoria fiscal inclusa',
      'Gestor de conta dedicado',
      'Formação empresarial',
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="precos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Planos & Preços</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl mb-6"
          >
            Escolha o plano ideal
            <br />
            <span className="text-gradient-gold">para o seu negócio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Soluções flexíveis adaptadas às necessidades da sua empresa.
            Todos os preços em Kwanzas (Kz).
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-gold/20 to-card border-2 border-gold/50 shadow-2xl shadow-gold/10'
                  : 'bg-card/50 border border-white/10 hover:border-gold/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gold text-navy text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-gradient-gold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">Kz{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold/30 hover:text-gold'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Começar Agora
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Precisa de uma solução personalizada para grandes empresas?
          </p>
          <motion.button
            onClick={() => handleSelectPlan({
              name: 'Plano Corporativo',
              price: 'Sob consulta',
              period: '',
              description: 'Personalizado para grandes empresas.',
              features: ['Soluções sob medida'],
              popular: false,
            })}
            className="text-gold hover:text-gold-light font-semibold underline-offset-4 hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            Fale connosco sobre o Plano Corporativo →
          </motion.button>
        </motion.div>
      </div>

      <PlanModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        plan={selectedPlan}
      />
    </section>
  );
};
