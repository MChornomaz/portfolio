import { useRef } from 'react';
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({type}) => {
  const ref = useRef()

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
    style={{background: type==='services' ? darkBg : lightBg}}>
      <motion.h2
      style={{y: yText}}
      >
        {type==='services' ? "What We Do?" : "What We Did?"}</motion.h2>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallax
