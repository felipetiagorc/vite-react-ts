import React, { createContext, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { LoginRequest } from './util'

// cria o contexto pra dar e receber valores
export const AuthContext = createContext<IContext>({} as IContext)

// esse fica por volta e controla o estado do login/logout
//recebe props.children do tipo IAuthProvider
export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IUser | null>()

    async function authenticate(email: string, password: string){
        const response = await LoginRequest(email, password)

        const payload = {token: response.token, email}
        setUser(payload)
    }
    function logout() {}

    return (
        <AuthContext.Provider value={{...user, authenticate, logout }}> 
            {children}
        </AuthContext.Provider>
    )
    // 20 mint video
    // https://www.youtube.com/watch?v=kPtTguJlRFY&list=PL6FcAU2NuI3UyCEmdYfhoB9Bz1ahGmcEA&index=3&t=7s
}