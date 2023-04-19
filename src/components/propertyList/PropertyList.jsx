import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>366 Hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf61baeeea1dfe9.gif" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>366 Apartments</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://cf.bstatic.com/images/hotel/max1024x768/415/415304940.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>366 Villas</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/b611b-resorts-near-coimbatore.jpg?fit=1000%2C667&ssl=1" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resort</h1>
                <h2>366 Resort</h2>
            </div>
        </div>
      
    </div>
  )
}

export default PropertyList
