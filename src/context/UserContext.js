import React from "react";
import GlobalFunction from "../Hook/GlobalFunction";
import UseFirebase from "./UseFirebase";
export const userContext = React.createContext()


function Provider({children}) {
const globalFunction = GlobalFunction();
const useFirebase = UseFirebase()

  return (
    <userContext.Provider value={{globalFunction,useFirebase}}>
        {children}
    </userContext.Provider>
  )
}
export default Provider;