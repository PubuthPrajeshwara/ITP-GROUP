import React from 'react'
import './Sidebar.css'
import { SidebarDatatop } from './SidebarDatatop'
import {SidebarDatabottom} from './SidebarDatabottom'

function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarDatatop.map((val, key) => {
             return <li key={key} className='Row' 
             id={window.location.pathname === val.link ? "active" : ""}
             onClick={() => {window.location.pathname = val.link}}>
                <div id="icon">{val.icon}</div>
                <div id="title">
                    {val.title}
                </div>
             </li>;
            })}
        </ul>
        <h2 className='System'>------Systems------</h2>
        <ul className="SidebarList">
            {SidebarDatabottom.map((val, key) => {
             return <li key={key} className='Row' 
             id={window.location.pathname === val.link ? "active" : ""}
             onClick={() => {window.location.pathname = val.link}}>
                <div id="icon">{val.icon}</div>
                <div id="title">
                    {val.title}
                </div>
             </li>;
            })}
        </ul>  
    </div>
  )
}

export default Sidebar