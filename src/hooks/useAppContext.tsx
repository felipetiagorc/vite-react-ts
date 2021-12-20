import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthProvider'


export const useAppContext = () => {
    const context = useContext(AuthContext);
    return context;
}