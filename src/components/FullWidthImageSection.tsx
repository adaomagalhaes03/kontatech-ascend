import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dataVizBg from '@/assets/data-viz.jpg';

export const FullWidthImageSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Parallax Image Container */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={dataVizBg}
          alt="Transformação Digital"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Transformando a forma como as empresas{' '}
            <span className="text-gradient-gold">controlam e crescem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Com foco em inovação, integração e inteligência digital, 
            oferecemos um ecossistema completo de serviços financeiros.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
