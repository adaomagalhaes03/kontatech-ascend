import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ from, to, suffix = '', prefix = '', duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  { value: 500, suffix: '+', label: 'Empresas Transformadas', description: 'Negócios que confiam em nós' },
  { value: 98, suffix: '%', label: 'Taxa de Satisfação', description: 'Clientes satisfeitos' },
  { value: 120, suffix: 'M', prefix: '', label: 'Kz Geridos', description: 'Em recursos financeiros' },
  { value: 10, suffix: '+', label: 'Anos de Experiência', description: 'No mercado angolano' },
];

export const ImpactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-navy animate-gradient" />
      
      {/* Glow Effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]"
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
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy-light/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
            Nosso Impacto
          </motion.span>
          <h2 className="section-title mb-6">
            Resultados que <span className="text-gradient-gold">falam</span> por si
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center group"
            >
              <div className="glass-card p-8 h-full transition-all duration-500 group-hover:bg-gold/5 group-hover:border-gold/20">
                {/* Number */}
                <motion.div
                  className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 font-heading"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Counter
                    from={0}
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2 + index * 0.2}
                  />
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
