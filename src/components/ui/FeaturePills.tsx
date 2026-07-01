"use client";

import { motion, type Variants } from "framer-motion";
import { PlusIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

type FeaturePillsProps = {
  items: readonly string[];
  className?: string;
};

export function FeaturePills({ items, className = "" }: FeaturePillsProps) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`flex flex-wrap justify-center gap-1.5 ${className}`}
    >
      {items.map((label) => (
        <motion.li key={label} variants={item}>
          <span className="pill text-sm sm:text-base">
            <PlusIcon className="h-4 w-4 text-primary" />
            {label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
