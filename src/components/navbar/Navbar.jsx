import {motion} from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration:0.5}}
        >Max Chornomaz</motion.span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="facebook icon" /></a>
          <a href="#"><img src="/instagram.png" alt="instagram icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
