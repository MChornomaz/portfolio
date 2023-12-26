import { useCallback, useEffect, useRef, useState } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useInView} from 'framer-motion'
import PortfolioTabs from './portfolioTabs/PortfolioTabs'
import PortfolioSlider from './portfolioSlider/PortfolioSlider';
import { portfolioType, layouts, reactStack, fullStack } from '../../common/constants';


const Portfolio = () => {
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })
  const [currentTab, setCurrentTab] = useState(portfolioType[0].name)

  

  const scrollToTop = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(()=> {
    if(isInView){
      scrollToTop(ref)
    }
  }, [currentTab, isInView])

  const changeTabHandler = useCallback((tabName) => {
    setCurrentTab(tabName)
  }, [])

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })
  
  const scaleX = useSpring(scrollYProgress,  {
    stiffness: 100,
    damping: 30
  })


  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <PortfolioSlider setCurrentTab={changeTabHandler} />
        <motion.div className="progressBar" style={{scaleX}}></motion.div>
      </div>
      {currentTab && currentTab === portfolioType[0].name 
      && <PortfolioTabs workList={layouts} />}
      {currentTab && currentTab === portfolioType[1].name 
      && <PortfolioTabs workList={reactStack} />}
      {currentTab && currentTab === portfolioType[2].name 
      && <PortfolioTabs workList={fullStack} />}
    </div>
  )
}

export default Portfolio
