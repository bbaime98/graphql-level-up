import React, {createContext} from 'react'

export const AppContext = createContext()

function ContextProvider({children}) {
  return (
    <AppContext.Provider value={{name: "Bien Aime"}}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
