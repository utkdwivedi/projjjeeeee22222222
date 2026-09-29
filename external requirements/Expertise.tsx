import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExpertiseItemProps {
  number: string;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function ExpertiseItem({
  number,
  title,
  description,
  delay,
  isInView,
}: ExpertiseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-white/10 py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
    >
      <motion.span
        className="font-playfair font-black text-5xl md:text-7xl text-white/10 group-hover:text-brand-orange transition-colors duration-500"
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        {number}
      </motion.span>
      <div className="flex-1">
        <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-brand-orange transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/40 mt-2 max-w-lg text-sm md:text-base group-hover:text-white/60 transition-colors duration-300">
          {description}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block text-brand-orange"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const expertiseItems = [
    {
      number: '01',
      title: 'Community Architecture',
      description:
        'Building and managing engaged subreddit communities and digital spaces with precision and scale.',
    },
    {
      number: '02',
      title: 'Visual Identity & Banners',
      description:
        'Creating high-retention banner art and collage visuals tailored for modern social platforms.',
    },
    {
      number: '03',
      title: 'Event Scenography',
      description:
        'Leading physical installations and creative set design work and murals.',
    },
    {
      number: '04',
      title: 'Rapid Prototyping',
      description:
        'Quick learning and execution of complex ideas, turning hardware constraints into creative advantages.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="bg-brand-black py-24 md:py-32 px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl max-w-2xl leading-tight uppercase">
            Design Expertise <br />
            <span className="text-brand-orange">To Transform Ideas</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {expertiseItems.map((item, index) => (
            <ExpertiseItem
              key={item.number}
              {...item}
              delay={0.2 + index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
