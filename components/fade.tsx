"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, Variants } from "framer-motion";

interface SlideInViewProps {
  children: React.ReactNode;
  direction: "left" | "right" | "up" | "down";
}

const slideInVariants: Variants = {
  visible: { opacity: 1, x: 0, y: 0 },
  hidden: { opacity: 0, x: "-50vw", y: 0 },
};

const SlideInView: React.FC<SlideInViewProps> = ({ children, direction }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const getHiddenVariant = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: "-50vw", y: 0 };
      case "right":
        return { opacity: 0, x: "50vw", y: 0 };
      case "up":
        return { opacity: 0, x: 0, y: "-50vh" };
      case "down":
        return { opacity: 0, x: 0, y: "50vh" };
      default:
        return { opacity: 0, x: "-50vw", y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: getHiddenVariant(),
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInView;
