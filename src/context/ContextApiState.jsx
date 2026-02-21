import React, { createContext } from "react";
import { useState } from "react";

// create context
export const contextState = createContext("");

function ContextApiState({ children }) {
  // Create global state

  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);

  return (
    <>
      <contextState.Provider value={{ open, auth, setOpen, setAuth }}>
        {children}
      </contextState.Provider>
    </>
  );
}

export default ContextApiState;
