import { useRef } from 'react';
import './skillsTab.scss'
import { motion, useInView } from 'framer-motion';

const cardVariants = {
  initial: {
    y: 1000,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.15
    }
  }
}

const SkillItem = ({skill}) => {
  return(
    <motion.div 
    className='skill'
    variants={cardVariants}
    >
      <div className='imageContainer'>
        <img src={skill.image} alt={skill.title} />
      </div>
      <h4>{skill.title}</h4>
    </motion.div>
  )
}

const SkillsTab = ({skills}) => {
  const skillRef = useRef()

    const isInView = useInView(skillRef, { margin: '-100px' })
  return (
    <div className='skillTab' ref={skillRef}>
      <motion.div 
      className="wrapper"
      variants={cardVariants}
      initial='initial'
      animate={isInView && 'animate'}
      
      >
        {
          skills.map(skill => (
            <SkillItem skill={skill} key={skill.id} />
          ))
        }
      </motion.div>
    </div>
  )
}

export default SkillsTab

