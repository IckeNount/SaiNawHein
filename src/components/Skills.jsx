import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { aiC, prC, figmaC, arrow1, arrow2 } from '../assets';

// import React from 'react';
// import { motion } from 'framer-motion';

// import { slideIn, textVariant } from '../utils/motion';

// import { styles } from '../styles';
// import { SectionWrapper } from '../hoc';

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 500, min: 0 },
//     items: 1,
//   },
// };

// const Skills = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>My TECH</p>
//         <h2 className={styles.sectionHeadText}>SKILLS.</h2>
//       </motion.div>
//       <motion.div
//         variants={slideIn('left', 'tween', 0.2, 1)}
//         className='flex-[0.25] mt-4 bg-black-100 p-4 rounded-2xl'
//       >
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           className='owl-carousel owl-theme skill-slider relative w-full h-[200px]'
//         >
//           <div className='flex flex-col items-center text-center'>
//             <img
//               className='w-36 h-36 object-contain'
//               src={meter1}
//               alt='Image'
//             />
//             <h3 className='text-white text-[20px] font-bold text-center'>
//               PHOTOSHOP
//             </h3>
//           </div>
//         </Carousel>
//       </motion.div>
//     </>
//   );
// };

import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, textVariant } from '../utils/motion';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const TechnologiesCard = () => (
  //   <Tilt className='xs:w-[250px] w-full'>
  <motion.div
    variants={slideIn('left', 'tween', 0.2, 1)}
    className='overflow-hidden mt-4'
  >
    <Carousel
      responsive={responsive}
      infinite={true}
      className='owl-carousel owl-theme skill-slider w-full  p-[1px] rounded-[20px] '
    >
      {technologies.map((tech, index) => (
        <div key={tech.name} className='w-full h-full bg-tertiary '>
          <div className='py-8 px-2 min-h-[180px] flex justify-evenly items-center flex-col'>
            <img
              src={tech.icon}
              alt='techno'
              className='w-36 h-36 object-contain -mt-6 '
            />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {tech.name}
            </h3>
          </div>
        </div>
      ))}
    </Carousel>
  </motion.div>
  //   </Tilt>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY TECH</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <TechnologiesCard />
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
