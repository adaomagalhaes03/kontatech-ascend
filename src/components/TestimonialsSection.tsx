import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'A Kontatech Partners transformou completamente a gestão financeira da nossa empresa. A equipa é extremamente profissional e os resultados superaram as nossas expectativas.',
    author: 'Carlos Mendes',
    role: 'CEO, TechAngola',
    company: 'Tecnologia',
  },
  {
    quote: 'Com a implementação do sistema SICGE, conseguimos reduzir em 40% o tempo gasto em processos administrativos. Uma parceria que recomendo a qualquer empresário.',
    author: 'Ana Santos',
    role: 'Diretora Financeira',
    company: 'Indústria',
  },
  {
    quote: 'O suporte e acompanhamento da Kontatech Partners é incomparável. Sinto que tenho um verdadeiro parceiro de negócios ao meu lado.',
    author: 'João Ferreira',
    role: 'Fundador, StartUp Hub',
    company: 'Serviços',
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/10 to-background" />

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
            Depoimentos
          </motion.span>
          <h2 className="section-title mb-6">
            O que dizem os <span className="text-gradient-gold">nossos clientes</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 pointer-events-none">
            <motion.button
              onClick={prev}
              className="pointer-events-auto -ml-4 md:-ml-12 w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={next}
              className="pointer-events-auto -mr-4 md:-mr-12 w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-gold/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="glass-card p-8 md:p-12 text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8"
                >
                  <Quote className="w-8 h-8 text-gold" />
                </motion.div>

                {/* Quote Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light italic"
                >
                  "{testimonials[current].quote}"
                </motion.p>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark mx-auto mb-4 flex items-center justify-center text-navy-deep font-bold text-xl">
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold">{testimonials[current].author}</h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[current].role}
                  </p>
                  <p className="text-gold text-sm font-medium mt-1">
                    {testimonials[current].company}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-8 bg-gold'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
