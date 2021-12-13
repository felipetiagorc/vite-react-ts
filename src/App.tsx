import React, {useEffect} from "react"
import { HomePage } from "./pages/HomePage"
import {AppContext} from './context/index'
import { useAppContext } from "./hooks/useAppContext"
import { BrowserRouter } from "react-router-dom";


function App() {

  const context = useAppContext()
   async function getData(){
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
      img: "https://images.unsplash.com/photo-1639100618065-358723b7961d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Ze da ze"
    }
  }

useEffect(()=>{
  if(!context.user){
  getData().then((data)=> {
    context.updateUser(data)
  })
} // fim do if

}, [])


  return (
    <HomePage/>
   )
}

export default App
