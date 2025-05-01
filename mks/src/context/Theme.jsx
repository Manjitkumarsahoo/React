import { createContext, useContext } from 'react'

export const ThemeContext = createContext({    //Create Contex by using createContex()
    themeMode: "light",
    darkTheme: () => { },                      //Provide some gloal value
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider        //Export and provide the contex 

export default function useTheme() {                      //create a custom hook
    return useContext(ThemeContext)
}