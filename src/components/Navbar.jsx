import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts";
const styles = {
    dark : {
        color: 'white',
        backgroundColor: 'black'
    },
    light : {
        color: 'black',
        backgroundColor: 'white'
    }

} 
export default function Navbar(){
    const { dark,setDark } = useContext(ThemeContext);
    console.log(dark,setDark)
    return (
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <Link to="/" style={dark ? styles.dark : styles.light }>Home</Link>
            <Link to="/about" style={dark ? styles.dark : styles.light}>About</Link> 
            <button onClick={()=>{setDark(!dark)}}>Theme</button>
        </div>
    )
}