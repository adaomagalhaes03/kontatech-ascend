import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Lightbulb, 
  Settings, 
  Users, 
  Globe 
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Contabilidade Digital e Fiscal',
    description: 'Gestão automatizada de contas, balanços e obrigações fiscais com tecnologia de ponta.',
  },
  {
    icon: TrendingUp,
    title: 'Gestão Financeira Integrada',
    description: 'Planeamento financeiro, controlo de fluxo de caixa e análise de rentabilidade.',
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Empresarial',
    description: 'Estratégias para crescimento, otimização de custos e sustentabilidade dos negócios.',
  },
  {
    icon: Settings,
    title: 'Implementação SICGE',
    description: 'Automatização total dos processos contábeis e administrativos com sistemas modernos.',
  },
  {
    icon: Users,
    title: 'Gestão de Recursos Humanos',
    description: 'Processos de RH integrados ao sistema digital, incluindo folha de pagamento.',
  },
  {
    icon: Globe,
    title: 'Internacionalização',
    description: 'Apoio na expansão para mercados lusófonos com assessoria especializada.',
  },
];

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/20 to-background" />
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nossos Serviços
          </motion.span>
          <h2 className="section-title mb-6">
            Soluções que <span className="text-gradient-gold">transformam</span>
            <br />o seu negócio
          </h2>
          <p className="section-subtitle mx-auto">
            Oferecemos um ecossistema completo de serviços financeiros e administrativos
            com foco em inovação, integração e inteligência digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full card-hover relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/10 transition-all duration-500 rounded-2xl" />
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <service.icon className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
