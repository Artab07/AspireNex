import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your photo
import myPhoto from "../assets/myPhoto.jpg";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get To Know</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      
      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='md:col-span-1 flex justify-center'>
          <motion.img
            src={myPhoto}
            alt='Artab Maji'
            className='w-80 h-80 object-cover'
          />
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='md:col-span-2 text-secondary text-[17px] leading-[30px]'
        >
          I'm Artab Maji, a passionate software engineer and web developer based in West Bengal. With a strong belief in the transformative power of technology, I've been involved in various projects, creating interactive websites, and efficient software solutions. Problem-solving drives me, and I enjoy tackling challenges with creativity. Beyond work, I'm an avid reader, guitarist, and nature enthusiast. Collaborating with diverse teams is essential to me as it fosters growth and creativity. My goal is to contribute to meaningful projects that positively impact society. I embrace new opportunities and am excited about the endless possibilities in the tech world. Let's connect and make a difference together!
        </motion.p>
      </div>

      <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-28 w-full'>
  {/* Education Section */}
  <motion.div className='mt-10 md:mt-[1rem]' variants={textVariant()}>
    <h3 className='text-white text-[24px] font-bold'>Education</h3>
    <div className='mt-6 text-secondary text-[17px] leading-[30px]'>
      <p>B.Tech in IT</p>
      <p>Higher Secondary Education</p>
    </div>
  </motion.div>

  <motion.div className='mt-10 md:mt-[1rem]' variants={textVariant()}>
    <h3 className='text-white text-[24px] font-bold'>Institution</h3>
    <div className='mt-6 text-secondary text-[17px] leading-[30px]'>
      <p>Narula Institute of Technology</p>
      <p>Dhatrigram High School</p>
    </div>
  </motion.div>

  <motion.div className='mt-10 md:mt-[1rem]' variants={textVariant()}>
    <h3 className='text-white text-[24px] font-bold'>G.P.A</h3>
    <div className='mt-6 text-secondary text-[17px] leading-[30px]'>
      <p>8.21</p>
      <p>84.6 %</p>
    </div>
  </motion.div>
</div>

      {/* Passion Section */}
      <motion.div className='mt-20' variants={textVariant()}>
        <h3 className='mt-[-3rem] text-white text-[24px] font-bold'>Passion</h3>
        <div className='mt-5 text-secondary text-[17px] leading-[30px]'>
          <p>Photography, Recitation.</p>
        </div>
      </motion.div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
