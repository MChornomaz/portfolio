import {motion, useInView} from 'framer-motion'
import './services.scss'
import { useRef } from 'react'

const variants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin: '-100px'})

  return (
    <motion.div 
    className='services'
    variants={variants}
    initial="initial"
    // whileInView="animate"
    ref={ref}
    animate={isInView && 'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your brand grow
            <br/>
            and move forward</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="working people" />
            <h2>
                <motion.b whileHover={{color: 'rgb(255, 165, 0)'}}>Unique</motion.b> Ideas
            </h2>
        </div>
        <div className="title">
            <h2>
                <motion.b whileHover={{color: 'rgb(255, 165, 0)'}}>For Your</motion.b> Business
            </h2>
            <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div 
        whileHover={{background: 'lightgray', color: 'black'}}
        className="box">
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur provident eos velit consequatur iste enim id, vel magni pariatur!</p>
            <button>Go</button>
        </motion.div>
        <motion.div 
        whileHover={{background: 'lightgray', color: 'black'}}
        className="box">
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur provident eos velit consequatur iste enim id, vel magni pariatur!</p>
            <button>Go</button>
        </motion.div>
        <motion.div 
        whileHover={{background: 'lightgray', color: 'black'}}
        className="box">
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur provident eos velit consequatur iste enim id, vel magni pariatur!</p>
            <button>Go</button>
        </motion.div>
        <motion.div 
        whileHover={{background: 'lightgray', color: 'black'}}
        className="box">
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tenetur provident eos velit consequatur iste enim id, vel magni pariatur!</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
