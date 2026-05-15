import { motion, useTime, useTransform } from "motion/react";

export default function MorphingBlob({ className, speed = 1, opacity = 0.4 }: { className?: string, speed?: number, opacity?: number }) {
  const time = useTime();
  
  // Create a continuous morphing value based on time and speed
  const morphValue = useTransform(time, t => (Math.sin(t * 0.001 * speed) + 1) / 2);
  
  const pathA = "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.5,-44.7C83.8,-31.3,87.3,-15.7,86.2,-0.6C85.1,14.5,79.4,28.9,71.2,42.3C63,55.7,52.3,68,39,75.4C25.7,82.8,9.8,85.2,-4.5,83.1C-18.8,81,-31.5,74.4,-44,66.1C-56.5,57.7,-68.8,47.7,-76,34.9C-83.2,22.1,-85.4,6.6,-83.4,-8.6C-81.4,-23.8,-75.2,-38.7,-65.4,-50.2C-55.6,-61.7,-42.2,-69.8,-28.8,-77C-15.4,-84.2,-1.9,-90.5,13.1,-87.3C28.1,-84.1,44.7,-76.4Z";
  const pathB = "M41.5,-73.2C52.7,-67.2,60,-53.4,66.1,-39.9C72.2,-26.4,77,-13.2,76.7,-0.2C76.3,12.8,70.9,25.6,63.1,36.8C55.3,48,45.2,57.6,33.1,65.2C21.1,72.8,7.1,78.5,-6,75.5C-19.1,72.5,-31.3,60.8,-42.6,51.1C-53.9,41.4,-64.3,33.7,-71.4,22.8C-78.5,11.9,-82.3,-2.3,-79.8,-15.4C-77.3,-28.5,-68.5,-40.5,-57.3,-50.6C-46.1,-60.7,-32.5,-68.9,-18.8,-74.3C-5.1,-79.7,8.7,-82.3,21.8,-79.9C34.9,-77.5,41.5,-73.2Z";

  // Note: Simple path morphing in Framer Motion requires the same number of points.
  // For complex paths like these, we can interpolate using useTransform.
  const d = useTransform(morphValue, [0, 1], [pathA, pathB]);

  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="morph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-brand-gradient-start)" />
          <stop offset="50%" stopColor="var(--color-brand-accent)" />
          <stop offset="100%" stopColor="var(--color-brand-gradient-end)" />
        </linearGradient>
      </defs>
      <motion.path
        style={{ d, opacity }}
        fill="url(#morph-gradient)"
        transform="translate(100 100)"
      />
    </svg>
  );
}
