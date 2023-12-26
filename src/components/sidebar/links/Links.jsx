
import { motion } from 'framer-motion';
import { useCallback } from 'react';
const variants = {
  open: {
    transition: {
      staggerChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  open: {
    y:0,
    opacity:1
  },
  closed: {
    y: 50,
    opacity:0,
  }
};


const Links = ({setOpen, needScrollHandler}) => {
  const items = [
    'Homepage',
    'Skills',
    'Portfolio',
    'Contact'
    ]

    const linkClickHandler = useCallback(()=> {
      setOpen(false)
      needScrollHandler(false)
    }, [needScrollHandler, setOpen])


  return (
    <motion.div className="links" variants={variants}>
      {
        items.map(item => (
          <motion.a 
          href={`#${item}`} 
          key={item} 
          variants={itemVariants}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
          onClick={linkClickHandler}
          >
            {item}
          </motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links
