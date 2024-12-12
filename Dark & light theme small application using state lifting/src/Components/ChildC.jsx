import React from 'react'

import{ThemeContext} from '../App'
import { useContext } from 'react'

const ChildC = () => {

const {theme, setTheme} = useContext(ThemeContext)

function ToggleTheme(){

    if(theme === 'light')
     setTheme('dark')
    else
    setTheme('light')
}

  return (
    <div>
      <button onClick={ToggleTheme}>
        Changel Theme
      </button>
    </div>
  )
}

export default ChildC
