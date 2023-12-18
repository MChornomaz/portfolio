import './hero.scss'
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-620%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  }
}


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div 
        className="textContainer" 
        variants={textVariants}
        initial="initial"
        animate="animate"
        >
          <motion.h2 
          variants={textVariants}>Maksym Chornomaz</motion.h2>
          <motion.h1 
          variants={textVariants}>Web Developer</motion.h1>
          <motion.div 
          variants={textVariants} className="buttons">
            <motion.a 
            href='#Portfolio'
            className='navBtn'
            variants={textVariants}>See the Latest Works</motion.a>
            <motion.a 
            href='#Contact'
            className='navBtn'
            variants={textVariants}>Contact Me</motion.a>
          </motion.div>
          <a href="#Skills" className='nextButton'>
            <motion.img 
            variants={textVariants}
            animate="scrollButton" 
            src="/scroll.png" 
            alt="mouse icon" 
            />
          </a>
        </motion.div>
      </div>
      <motion.div 
      className="slidingTextContainer"
      variants={sliderVariants}
      initial="initial" 
      animate="animate"
      >
        Frontend Backend FullStack
      </motion.div>
      <motion.div 
      className="imageContainer"
      initial={{scale: 0.4, opacity: 0, y: 500}}
      animate={{scale: 1, opacity: 1, y: 0, transition: {duration: 2}}}
      >
        <img src="/hero4.png" alt="photo" />
      </motion.div>
    </div>
  )
}

export default Hero
