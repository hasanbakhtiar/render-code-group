import { createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    return <MyContext.Provider value={"Hasan"}>{children}</MyContext.Provider>
}