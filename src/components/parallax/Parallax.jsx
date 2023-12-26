import { useRef } from 'react';
import './parallax.scss'
import { motion, useScroll, useTransform , useInView} from 'framer-motion';

const Parallax = ({type}) => {
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const yText = useTransform(scrollYProgress,
    [0,1], ['0%', '500%'])
  const yBg = useTransform(scrollYProgress,
    [0,1], ['0%', '130%'])

  const darkBg = 'linear-gradient(180deg, #111132, #0c0c1d)'
  const lightBg = 'linear-gradient(180deg, #111132, #505064)'
  return (
    <div 
    ref={ref}
    className="parallax" 
    style={{background: type==='skills' ? darkBg : lightBg}}>
      <motion.h2
      style={{y: yText}}
      initial={{scale: 0.01}}
      animate={isInView ? {scale: 1, transition: {duration: 1.5}} : {scale: 0.01}}
      >
        {type==='skills' ? "My Skills" : "My Works"}</motion.h2>
      <motion.div className="mountains"></motion.div>
      <motion.div 
      style={
        {y: yBg, 
        backgroundImage: `url(${type==='skills' ? '/planets.png' : '/sun.png'})`
        }
      } 
      className="planets"></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
