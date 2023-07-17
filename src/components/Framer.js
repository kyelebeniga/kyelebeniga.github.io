import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Framer = ({ children, variant }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const mainControls = useAnimation();
  const secondaryControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
      secondaryControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants = {variant}
        initial = "hidden"
        animate = {mainControls}
        transition={{ 
          type: 'spring',
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}