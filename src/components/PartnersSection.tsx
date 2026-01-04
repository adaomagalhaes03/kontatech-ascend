import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Partner logos as text (would be actual logos in production)
const partners = [
  'KontaMais',
  'SICGE',
  'DigiFinance',
  'TechConsult',
  'AfricaGrow',
];

export const PartnersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-16 relative overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-10"
        >
          Parceiros que confiam em nós
        </motion.p>

        {/* Scrolling Partners */}
        <div ref={ref} className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-8 py-4 glass-card transition-all duration-300 group-hover:border-gold/30">
                  <span className="text-xl font-heading font-semibold text-muted-foreground group-hover:text-gold transition-colors duration-300">
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};
