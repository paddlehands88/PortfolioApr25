// import { motion } from 'framer-motion';
import { styles } from '../styles';

import { ComputersCanvas } from './canvas';
import { stefKeyboard } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-5/6 mx-auto">

      {/* CONTAINER */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* spot & tail */}
        <div className="flex flex-col justify-center items-center mt-5"> 
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* GROUP HEADTEXT & SUBTEXT */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Stefan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>  
            I develop full-stack software <br className="sm:block hidden"/>
            applications for the web
          </p>
        </div>
      </div>


       {/* STEFAN IMAGE AND CANVAS SECTION */}
       <div className="h-[44rem] px-10 flex flex-col justify-end lg:flex-row lg:justify-between items-end max-w-7xl mx-auto w-full">
          {/* 3D COMPUTERS CANVAS - Only visible on large screens */}
          <div className="hidden lg:block lg:w-1/2 lg:h-full">
            <ComputersCanvas />
          </div>

          {/* {typeof window !== 'undefined' && window.innerWidth >= 1024 ? (
            <div className="lg:w-1/2 lg:h-full">
              <ComputersCanvas />
            </div>
          ) : null} */}
          
          {/* STEFAN IMAGE - Maintains current responsive behavior */}
          <div className="flex w-full lg:w-1/2 justify-center sm:justify-end">
            <img 
              src={stefKeyboard} 
              alt="Stefan with keyboard" 
              className="relative w-auto max-w-full h-auto max-h-[45vh] md:max-h-[50vh] lg:max-h-[80vh] object-contain" 
            />
          </div>
        </div>


        {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />

              
            </div>
          </a>
        </div> */}

    </section>
  )
}

export default Hero