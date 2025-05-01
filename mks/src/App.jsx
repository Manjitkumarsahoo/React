// import Login from "./components/Login"
// import Profile from "./components/Profile"
// import UserContextProvider from "./context/UserContextProvider"

// function App() {


//   return (
//     <>
//       <UserContextProvider>
//         <Login />
//         <Profile />
//       </UserContextProvider>
//     </>
//   )
// }

// export default App

import React from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { useState,useEffect } from 'react'

function App() {

  const [themeMode, setthemeMode] = useState("light")                    //Create state for handle themeMode

  const lightTheme = () => {                                           //create method for change state
    setthemeMode("light")
  }

  const darkTheme = () => {                                             //create method for change state
    setthemeMode("dark")
  }

  //Actual change in a theme 

  useEffect(() => {                                                        //Change the theme base on themeMode
    document.querySelector('html').classList.remove("light","dark")        //Remove the calss name from HTML
    document.querySelector('html').classList.add(themeMode)                //Add the class name base on themeMode 
  }, [themeMode])
  
  return (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>    {/*Wrapping all inside contexWrapper and Provide the value*/}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>                                                          {/*Using the ThemeBtn Component*/}
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>                                                              {/*Using the Card Component*/}
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
