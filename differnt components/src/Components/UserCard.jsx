
import React from 'react'

import "./UserCard.css"


const UserCard = (props) => {
  return (
    <div>
    <div className='user-container' style={props.style}>

        <p id='user-name'>{props.name}</p>

        <img id='user-img' src={props.image} alt={props.name}></img>

        <p id='user-desc'>Token of love ❤️ {props.desc}</p>
      
    </div>


<div className='user-container' style={props.style}>

<p id='user-name'>{props.name}</p>

<img id='user-img' src={props.image} alt={props.name}></img>

<p id='user-desc'>Token of love ❤️ {props.desc}</p>

</div>

</div>

  )
}

export default UserCard
