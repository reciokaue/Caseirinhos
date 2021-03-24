import { createContext, ReactNode, useContext, useState } from "react"


interface LoginContextData{
    setLogged: (type: number | null) => void
    logOut: () => void;
    userID: number;
}

interface LoginProviderProps{
    children: ReactNode
}

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider({children} : LoginProviderProps){
    const [ userID, setUserID ] = useState(0)
    
    function setLogged(type: number | null){
        setUserID(type)
    }
    function logOut(){
        setUserID(0)
    }
    
    return(
        <LoginContext.Provider value={{
            setLogged,
            logOut,
            userID
        }}>  
            {children}
        </LoginContext.Provider>
    )
   
}
export function useContextLogin(){
    const context = useContext(LoginContext)
    const { setLogged, logOut, userID} = context
    return { setLogged, logOut, userID}
}