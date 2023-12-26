import PortfolioItem from '../portfolioItem/PortfolioItem'

const PortfolioTabs = ({workList}) => {
  return (
    <div>
      {
        workList.map(el => (
            <PortfolioItem key={el.id} item={el} />
        ))
      }
    </div>
  )
}

export default PortfolioTabs
