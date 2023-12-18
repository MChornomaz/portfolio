import { motion, useInView } from 'framer-motion'
import './skills.scss'
import { useRef, useState } from 'react'

import { frontendSkills, backendSkills, generalSkills } from '../../common/constants'
import SkillsTab from './skillTab/SkillsTab'

const titleVariants = {
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
        },
    }
}

const tabVariants = {
    initial: {
        scale: 1,
        transition: {
            duration: 0.6
        }
    },
    animate: {
        scale: 1.2,
        transition: {
            duration: 0.6
        }
    }
}



const Skills = () => {
    const titleRef = useRef()

    const isInView = useInView(titleRef, { margin: '-100px' })

    const [activeTab, setActiveTab] = useState('frontend')

    return (
        <motion.div className='skills' ref={titleRef}>
            <motion.div 
            className="title"
            variants={titleVariants}
            initial="initial"
            animate={isInView && 'animate'}
            >
                <motion.h3
                    onClick={() => setActiveTab('backend')}
                    className={`tabName ${activeTab === 'backend' && 'active'}`}
                    variants={tabVariants}
                    initial='initial'
                    animate={activeTab==='backend' ? 'animate' : 'initial'}
                    exit={activeTab !== 'backend'}
                >
                    <motion.b
                        whileHover={{ color: 'rgb(255, 165, 0)' }}
                    >
                        Backend
                    </motion.b>
                    Skills
                </motion.h3>
                <motion.h3
                    onClick={() => setActiveTab('frontend')}
                    className={`tabName ${activeTab === 'frontend' && 'active'}`}
                    variants={tabVariants}
                    initial='initial'
                    animate={activeTab==='frontend' ? 'animate' : 'initial'}
                >
                    <motion.b
                        whileHover={{ color: 'rgb(255, 165, 0)' }}
                    >
                        Frontend
                    </motion.b>
                    Skills
                </motion.h3>
                <motion.h3
                    onClick={() => setActiveTab('general')}
                    className={`tabName ${activeTab === 'general' && 'active'}`}
                    variants={tabVariants}
                    initial='initial'
                    animate={activeTab==='general' ? 'animate' : 'initial'}
                    >
                    <motion.b
                        whileHover={{ color: 'rgb(255, 165, 0)' }}
                    >
                        General
                    </motion.b>
                    Skills
                </motion.h3>
            </motion.div>
            {activeTab && activeTab === 'backend'
                && <SkillsTab skills={backendSkills} />}
            {activeTab && activeTab === 'frontend'
                && <SkillsTab skills={frontendSkills} />}
            {activeTab && activeTab === 'general'
                && <SkillsTab skills={generalSkills} />}
        </motion.div>
    )
}

export default Skills
