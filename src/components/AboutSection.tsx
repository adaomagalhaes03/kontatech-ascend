import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const values = [
  'Ética e Transparência',
  'Comprometimento',
  'Inovação',
  'Excelência',
  'Confiança e Parceria',
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section id="sobre" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Sobre Nós
            </motion.span>

            <h2 className="section-title mb-6">
              Contabilidade <span className="text-gradient-gold">Moderna</span>
              <br />para o Futuro
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A Kontatech Partners reúne um ecossistema de empresas angolanas especializadas 
              em contabilidade, gestão e transformação digital, oferecendo soluções integradas 
              para organizações que buscam eficiência, controlo financeiro e crescimento sustentável.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-10">
              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gold mb-2">Missão</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conectar empresas e profissionais de contabilidade qualificados, oferecendo 
                  soluções eficientes, personalizadas e éticas que contribuam para o crescimento 
                  sustentável dos negócios.
                </p>
              </motion.div>

              <motion.div
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gold mb-2">Visão</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ser a principal referência em gestão financeira e contabilidade digital em Angola 
                  e em toda a África Lusófona, oferecendo soluções inovadoras que transformem a forma 
                  como as empresas controlam, planeiam e expandem os seus negócios.
                </p>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Nossos Valores
              </h4>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'hsl(42, 70%, 55%, 0.2)' }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative Elements */}
            <motion.div
              style={{ y }}
              className="absolute -top-10 -right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
            />
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], ['-10%', '10%']) }}
              className="absolute -bottom-10 -left-10 w-72 h-72 bg-navy-light/20 rounded-full blur-3xl"
            />

            {/* Main Visual Card */}
            <div className="relative glass-card p-10 overflow-hidden">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="text-8xl md:text-9xl font-bold text-gold/10 font-heading mb-4"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  K
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2">Kontatech Partners</h3>
                <p className="text-muted-foreground text-sm">
                  Estratégia, precisão e confiança
                </p>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-gradient-gold">5</div>
                    <div className="text-xs text-muted-foreground">Empresas Integradas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-gold">360°</div>
                    <div className="text-xs text-muted-foreground">Soluções Completas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
