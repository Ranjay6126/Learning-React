import { createContext, useState } from 'react'


import './App.css'
import ChildA from './assets/Components/ChildA';

// Step :=> 1 Create Context

const UserContext = createContext();

// step 2:=> wrap all the child inside a provider

// step 3:=> pass the value to the provider

// step 4=> Consumer k andar jaake consume karlo

function App() {

  const [user, setUser] = useState({name:"Ranjay Prajapati"})

  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
      
    </>
  )
}

export default App
export {UserContext}
