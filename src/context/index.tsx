import React, { createContext, useCallback, useState } from 'react'
import {useLocalStorage} from 'react-use'

interface IUser {
    img: string;
    name: string;
}

//pode ter themas

//interface geral q engloba outras ? 
interface IAppContext {
    user?: IUser;
    updateUser(user:IUser):void;
}

//cria o contexto efetivamente:
const AppContext = createContext<IAppContext>({
    user: undefined,
    updateUser: () => {}
}) 

const AppProvider = ({children}: {children: JSX.Element}) => {
    const [data, setData] = useLocalStorage<IUser>("user-logged", undefined);

    const updateUser = useCallback((user: IUser)=>{
            setData(user)
    },[]);

    return(
        <AppContext.Provider value={{user: data, updateUser}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider};