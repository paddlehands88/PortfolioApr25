import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="w-full xl:overflow-hidden -mt-20">
        <motion.div 
          className='flex flex-row gap-10'
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {/* First set of icons */}
          {technologies.map((technology) => (
            <div 
              className='flex items-center justify-center flex-shrink-0' 
              key={technology.name}
            >
              <img 
                src={technology.icon} 
                alt={technology.name}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"
              />
            </div>
          ))}
          
          {/* Duplicate set of icons to create seamless loop */}
          {technologies.map((technology) => (
            <div 
              className='flex items-center justify-center flex-shrink-0' 
              key={`${technology.name}-duplicate`}
            >
              <img 
                src={technology.icon} 
                alt={technology.name}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");