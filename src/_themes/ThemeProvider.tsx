import {useState} from "react";
import ThemeContext from "./ThemeContext.tsx";

// TODO add system theme matching
// TODO add saving in local storage
export default function ThemeProvider({children}: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)

    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(newTheme)
  }

  return (
    // @ts-ignore
    <ThemeContext.Provider value={{theme, setTheme: changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
