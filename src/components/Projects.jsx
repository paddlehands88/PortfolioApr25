import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects, ProjectHeadlineInfo } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import ProjectCard from "./subComponents/ProjectCard";
import ProjectHeadline from "./subComponents/ProjectHeadline";

const Projects = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>what i can do</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Featured Project */}
      <ProjectHeadline 
        name={ProjectHeadlineInfo.name}
        description={ProjectHeadlineInfo.description}
        image={ProjectHeadlineInfo.image}
        tags={ProjectHeadlineInfo.tags}
        source_code_link={ProjectHeadlineInfo.source_code_link}
      />
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-16 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following apps are from instructional videos. I've been attracted to the aesthetics and UX and sought to understand the systems and technologies behind them. 
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");