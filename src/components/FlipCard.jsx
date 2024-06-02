import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const FlipCard = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const flipToFront = () => {
    if (isFlipped) {
      setIsFlipped(false);
    }
  };

  const flipToBack = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  return (
    <div
    className="relative w-full h-full"
    onMouseEnter={flipToBack}
      onMouseLeave={flipToFront}
    //   style={{ perspective: "1000px" }}
    >
      <motion.div
        className={` ${
          isFlipped ? "hidden" : "block"
        }`}
        initial={{ rotateY: 0 }}
        animate={controls}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        onClick={flipCard}
      >
        {children[0]}
      </motion.div>
      <motion.div
        className={`${
          isFlipped ? "block" : "hidden"
        }`}
        initial={{ rotateY: -180 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        onClick={flipCard}
      >
        {children[1]}
      </motion.div>
    </div>
  );
};

export default FlipCard;
