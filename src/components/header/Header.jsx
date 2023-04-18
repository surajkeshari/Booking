import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { faPerson  } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import { faBed } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div className="header">
    <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>stays</span>
        </div>

        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane}  />
        <span>Flights</span>        
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>        
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>        
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>        
        </div>

      </div>
      <h1 className="headerTitle">A lifetime of discount ? it's genius.</h1>
    <p className="headerDesc">
      get rewad for your unlock instant saving of 1% or more
    </p>
    <button className="headerBtn">Sign in / Register</button>
    <div className="headerSearch">

      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon" />
        <input type="text"  placeholder="Where Are u going" className="headerSearchInput"/>
      </div>

      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
       <span className="headerSearchText">date to date </span>
       <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
/>
      </div>

      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
       <span className="headerSearchText">2 adult 2 children 1 room </span>
      </div>
      <div className="headerSearchItem">
         <button className="headerBtn">Search</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header
