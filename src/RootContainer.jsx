import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import { ThemeContext } from './contexts';
export default function RootContainer(){
    const [dark,setDark] = useState('')
    return (
        <ThemeContext.Provider value={{dark,setDark}}>
            <Routes>
                
                    <Route path="/" element={ <Home /> } />
                    <Route path="/about" element={ <About /> } />
            </Routes>
        </ThemeContext.Provider> 

    );
}