import {motion} from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'


const Navbar = ({needScrollHandler}) => {
  return (
    <div className="navbar">
      <Sidebar needScrollHandler={needScrollHandler} />
      <div className="wrapper">
        <motion.span
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration:0.5}}
        >Max Chornomaz</motion.span>
        <div className="social">
          <motion.a 
          href="https://github.com/MChornomaz" 
          target='blank'
          whileHover={{scale: 1.2, transition: {duration: 0.5}}}
          >
            <img src="/github.png" alt="facebook icon" />
            </motion.a>
          <motion.a 
          href="https://www.linkedin.com/in/maksym-chornomaz/" 
          target='blank'
          whileHover={{scale: 1.2, transition: {duration: 0.5}}}
          >
            <img src="/linkedIn.png" alt="facebook icon" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
