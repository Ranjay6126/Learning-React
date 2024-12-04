
import UserCard from "./Components/UserCard"


import lovepic from "./assets/lovepic.jpeg"

import alluarjun from "./assets/alluarjun.jpg"

import Rashmika from "./assets/Rashmika.jpg"

function App() {


  return (
    <>
      <div className='container' style={{display : "flex"}}>
       <UserCard name="Ranjay Bhai"   desc="from Ranjay"   image={lovepic}  style={{"border-radius":"10px"}} />
       <UserCard name="Allu Arjun" desc="from Allu Arjun"      image={alluarjun}  style={{"border-radius":"10px"}}/>
       <UserCard name="Rashmika" desc="from Rashmika"      image={Rashmika}  style={{"border-radius":"10px"}}/>
      </div>
    </>
  )
}

export default App
