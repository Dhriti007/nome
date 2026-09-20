import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** vertical offset in px before reveal */
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  /** run the animation only once (default true) */
  once?: boolean;
}

/**
 * Scroll-triggered reveal — soft fade + translate, matching the portfolio's
 * existing motion language (short, springy, purposeful).
 * Respects prefers-reduced-motion via framer-motion's useReducedMotion.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  y = 24,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-8% 0px' }}
      transition={{ duration: reduceMotion ? 0 : duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
