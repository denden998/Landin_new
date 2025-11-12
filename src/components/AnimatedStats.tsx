import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedStatsProps {
  number: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export function AnimatedStat({ number, suffix = '', label, duration = 2 }: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // For decimals like 4.9
    if (number % 1 !== 0) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, number, {
        duration,
        ease: 'easeOut',
      });

      return controls.stop;
    }
  }, [isVisible, count, number, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="text-center group"
    >
      <div className="text-5xl md:text-6xl text-orange-600 mb-2">
        <motion.span className="inline-block">{rounded}</motion.span>
        <span className="inline-block">{suffix}</span>
      </div>
      <div className="text-gray-700 text-lg">{label}</div>
    </motion.div>
  );
}
