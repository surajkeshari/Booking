import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>143 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cdn.britannica.com/02/94602-050-431F6ECC/Old-Town-Warsaw.jpg" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Warsaw</h1>
            <h2>155 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1581791534721-e599df4417f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2Fzb2x8ZW58MHx8MHx8&w=1000&q=80" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Kasol</h1>
            <h2>69 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://thumbs.dreamstime.com/b/cherrapunjee-meghalaya-india-beautiful-panorama-seven-sisters-waterfalls-near-town-cherrapunjee-meghalaya-north-107582313.jpg" alt="" className="featuredImg"/>
        <div className="featuredTitles">
            <h1>Meghalaya</h1>
            <h2>183 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
