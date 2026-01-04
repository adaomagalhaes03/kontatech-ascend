import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Análise Inicial',
    description: 'Compreendemos profundamente as necessidades específicas do seu negócio e desafios atuais.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Desenvolvemos um plano personalizado com soluções integradas para os seus objetivos.',
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Executamos as soluções com acompanhamento próximo e transição suave dos processos.',
  },
  {
    number: '04',
    title: 'Resultados',
    description: 'Monitoramos métricas, otimizamos continuamente e garantimos crescimento sustentável.',
  },
];

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="processo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nosso Processo
          </motion.span>
          <h2 className="section-title mb-6">
            Um caminho comprovado para o{' '}
            <span className="text-gradient-gold">sucesso</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Acompanhamos cada etapa da jornada do seu negócio com metodologia 
            testada e resultados comprovados.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div ref={ref} className="relative">
          {/* Connection Line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent hidden lg:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative"
              >
                {/* Card */}
                <div className="glass-card p-8 text-center lg:text-left relative group card-hover">
                  {/* Step Number */}
                  <motion.span
                    className="step-number block mb-4 font-heading select-none"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {step.number}
                  </motion.span>

                  {/* Dot Indicator */}
                  <motion.div
                    className="absolute top-4 right-4 lg:top-1/2 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-auto lg:bottom-[-20px] z-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.4, type: 'spring' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-gold glow-gold relative">
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="-mt-16">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
