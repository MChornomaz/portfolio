import { useCallback, useState } from 'react'
import './portfolioSlider.scss'
import { portfolioType } from '../../../common/constants'
import Carousel from 'react-spring-3d-carousel';



const PortfolioSlider = ({setCurrentTab}) => {
  const [activeSlide, setActiveSlide] = useState(portfolioType[0].name)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1)

  const tabClickHandler = useCallback((name, id)=> {
    setActiveSlide(name)
    setCurrentTab(name)
    setCurrentSlideIndex(id)
    
  }, [setCurrentTab])

  const slides = portfolioType.map((type, index) => ({
    key: type.id,
    content: <h3 key={type.id} className={`sliderItem ${activeSlide === type.name && 'active'}`} onClick={() => tabClickHandler(type.name, index)}>
      {type.name}
    </h3>
}))
  

  const rightArrowClickHandler = useCallback(()=> {
    const currentIndex = portfolioType.findIndex(el => el.name === activeSlide);
    
      if (currentIndex === portfolioType.length -1){
        setActiveSlide(portfolioType[0].name)
        setCurrentTab(portfolioType[0].name)
        setCurrentSlideIndex(0)
      } else {
        setActiveSlide(portfolioType[currentIndex + 1].name)
        setCurrentTab(portfolioType[currentIndex + 1].name)
        setCurrentSlideIndex(currentIndex+ 1)
      }
  }, [setCurrentTab, activeSlide])

  const leftArrowClickHandler = useCallback(()=> {
    const currentIndex = portfolioType.findIndex(el => el.name === activeSlide);
    
      if (currentIndex === 0){
        setActiveSlide(portfolioType[portfolioType.length -1].name)
        setCurrentTab(portfolioType[portfolioType.length -1].name)
        setCurrentSlideIndex(portfolioType.length -1)
      } else {
        setActiveSlide(portfolioType[currentIndex - 1].name)
        setCurrentTab(portfolioType[currentIndex - 1].name)
        setCurrentSlideIndex(currentIndex -1)
      }
  }, [setCurrentTab, activeSlide])

  return (
    <div className='slider'>
      <div className="wrapper">
          <div className="arrow" onClick={leftArrowClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z"/></svg>
          </div>
          <div className="sliderContent">
            <Carousel slides={slides}  animationConfig={{tension: 120, friction: 14}} offsetRadius={4} goToSlide={currentSlideIndex}/>
          </div>
          <div className="arrow" onClick={rightArrowClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
          </div>
      </div>
    </div>
  )
}

export default PortfolioSlider
