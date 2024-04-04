import React, {useState} from 'react'
import Filter from './Filter';
import './PopupFilter.css'

const PopupFilter = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };
  
    return (
    <div>
        <button className='popup-btn' onClick={togglePopup}>Filter</button>
        {isPopupOpen && <Filter />}
    </div>
  )
}

export default PopupFilter