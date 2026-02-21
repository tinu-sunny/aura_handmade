import React, { createContext } from 'react'
import { useState } from 'react'


// create context 
export  const contextState = createContext("")

function ContextApiState({children}) {
    // Create global state 

    const [open, setOpen] =useState(false)
  return (
    <>
    <contextState.Provider value={{open,setOpen}}>
        {
            children
        }
    </contextState.Provider>
    </>
  )
}

export default ContextApiState