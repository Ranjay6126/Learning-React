import React from 'react'

import './NavBar.css'



import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    // Link to for the used for the single page appliction Ex: Home / About



    // <div>
      
    //   <ul>
    //        <li>
    //          < Link to ='/'> Home</Link>

    //        </li>
            
    //        <li>
    //          < Link to='/about'> About</Link>

    //        </li>

    //        <li>
    //          < Link to='/dashboard'> Dashboard</Link>

    //        </li>
    //   </ul>

    // </div>



    // NavLink to link for the same porpuse but easy to attached sylling


     <div>
      
      <ul>
           <li>
             < NavLink to ='/'> Home</NavLink>

           </li>
            
           <li>
             < NavLink to ='/about'> About</NavLink>

           </li>

           <li>
             < NavLink to ='/dashboard'> Dashboard</NavLink>

           </li>
      </ul>

    </div>


  )};

export default NavBar
