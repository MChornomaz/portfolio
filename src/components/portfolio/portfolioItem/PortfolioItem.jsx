import { useRef } from 'react'
import './portfolioItem.scss'
import {  motion, useInView } from 'framer-motion'

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
    }
}

const imageVariants = {
    initial: {
        x: 500,
        opacity: 0,
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

const PortfolioItem = ({ item }) => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: '-100px' })


    return (
        <section className='portfolioItem' ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <motion.div 
                    className="imageContainer" 
                    variants={imageVariants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    >
                        <motion.img src={item.image} alt={item.title} variants={imageVariants} />
                    </motion.div>
                    <motion.div 
                    className="textContainer" 
                    variants={textVariants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    >
                        <motion.h3  variants={textVariants}>{item.title}</motion.h3>
                        <motion.p variants={textVariants}>{item.description}</motion.p>
                        <motion.div variants={textVariants} className='technologies'>
                            <span className='technologiesTitle'>Technologies: </span>
                            <div className='technologiesList'>
                                {
                                    item.technologies && item.technologies.map((technology, index) => (
                                        <span key={technology} className='technology'>
                                            {technology}{index !== item.technologies.length - 1 ? ', ' : ''}
                                        </span>
                                    ))
                                }
                            </div>
                        </motion.div>
                        <motion.div variants={textVariants} className="links">
                            <p className='linkTitle'>Links: </p>
                            {item.url && item.url.length > 0
                                && <a href={item.url} className="link" target='blank'>
                                    <img src="/github.png" alt="Link to github of the project" />
                                </a>}
                            {item.gitHubUrl && item.gitHubUrl.length > 0
                                && <a href={item.gitHubUrl} className="link" target='blank'>
                                    <img src="/url.png" alt="Link to project" />
                                </a>}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioItem
