import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
      <img src="https://sunprojectsindia.com/wp-content/uploads/2023/02/Elecasa-Near-Lulu.jpg" alt="" className="fpImg" />
      <span className="fpName">Lulu Appartments</span>
      <span className="fpCity">Allahabad</span>
      <span className="fpPrice">Starting From Rs.5999</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">  
      <img src="https://sunprojectsindia.com/wp-content/uploads/2023/02/Elecasa-Near-Lulu.jpg" alt="" className="fpImg" />
      <span className="fpName">Adani Appartments</span>
      <span className="fpCity">Kanpur</span>
      <span className="fpPrice">Starting From Rs.6999</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>

      <div className="fpItem">
      <img src="https://sunprojectsindia.com/wp-content/uploads/2023/02/Elecasa-Near-Lulu.jpg" alt="" className="fpImg" />
      <span className="fpName">Ambani Appartments</span>
      <span className="fpCity">Lucknow</span>
      <span className="fpPrice">Starting From Rs.5099</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
