import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { github } from '../../assets'
import { Tilt } from "react-tilt"



function ProjectHeadline({
  name,
  description,
  tags,
  image,
  source_code_link
}) {
  return (
    <>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          When deciding on personal projects, I have chosen market-leading apps and sought to understand "What is the purpose of this app? What problem does it solve, and how does it achieve this?"
          <br />
          <br />
          I followed and learnt from instructional videos how to code some of the best full-stack applications. To demonstrate and test my learning I knew I had to build my own app.
          <br />
          <br />
          I chose a real-world sports association of which I have intimate knowledge. From concept to design, I built the first version of an app alligned to the organisation's purpose of growing the sport.
          
        </motion.p>
      </div>

      {/* HEADLINE CARD COMPONENT */}
      <div 
        onClick={() => window.open("https://bhuk1.vercel.app/", "_blank")}
        className="mt-10 w-full h-full cursor-pointer"
      >

        {/* MOBILE VIEW UP TO XL SCREENS (<XL) */}
        <div className="xl:hidden w-full h-full max-w-[760px]">
          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
            <Tilt
              options={{ max: 45, scale: 1, speed: 450 }}
              className='bg-tertiary p-5 rounded-2xl w-full h-full'
            >
              <div className='relative w-full min-h-[230px] max-w-[740px]'>
                <img
                  src={image}
                  alt='featured project'
                  className='w-full h-full object-cover rounded-2xl max-h-[500px] max-w-[750px]'
                />
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                    <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
              </div>
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* DESKTOP VIEW XL+ (full width layout) */}
        <div className="hidden xl:block">
          <motion.div 
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="bg-tertiary p-5 rounded-2xl w-full flex overflow-hidden"
          >
            {/* Left side - Image (2/3 width) */}
            <div className="w-2/3 h-full relative">
              <img
                src={image}
                alt='featured project'
                className='w-full h-full object-cover rounded-2xl'
              />
              <div className='absolute top-0 right-0 flex justify-end m-3'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
            </div>
            
            {/* Right side - Content (1/3 width) */}
            <div className="w-1/3 pl-6 flex flex-col h-[490px] relative">
              <div>
                <h3 className='text-white font-bold text-[32px]'>{name}</h3>
                <p className='mt-4 text-secondary text-[16px] leading-relaxed'>{description}</p>
              </div>
              
              <div className='absolute bottom-0 left-6 right-0 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <p
                    key={`${name}-${tag.name}`}
                    className={`text-[16px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectHeadline