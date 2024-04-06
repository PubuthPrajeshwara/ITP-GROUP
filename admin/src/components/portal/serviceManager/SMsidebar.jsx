import React from 'react'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import '../serviceManager/SMsidebar.css'

export const SidebarDatatop = [
  {
    title: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
    link: "/dashboard"
  },
  {
    title: "Home",
    icon: <HomeOutlinedIcon />,
    link: "/home"
  },
  {
    title: "Users",
    icon: <PeopleAltOutlinedIcon />,
    link: "/users"
  }
]


function MySidebar() {
    const location = useLocation();
  
    return (
      <div className="Sidebar">
        <ul className="SidebarList">
          {SidebarDatatop.map((val, key) => (
            <li
              key={key}
              className='Row'
              id={location.pathname.startsWith(val.link) ? "active" : ""}
            >
              <Link to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className='System'>------Systems------</h2>
        <ul className="SidebarList">
          {SidebarDatabottom.map((val, key) => (
            <li
              key={key}
              className='Row'
              id={location.pathname.startsWith(val.link) ? "active" : ""}
            >
              <Link to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          ))}
        </ul>  
      </div>
    );
  }
  
  export default MySidebar;
  
