import  { useContext} from "react"
import { ThemeContext } from "../contexts"
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
export default function Form( ){
    const { dark,setDark } = useContext(ThemeContext);

    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <h1>Form</h1>
            <button onClick={()=>{setDark(!dark)}}>theme</button>
            <input type='text' style={dark ? styles.dark : styles.light}/>
            <input type='text' style={dark ? styles.dark : styles.light}/>
            <input type='text' style={dark ? styles.dark : styles.light}/>
            <input type='text' style={dark ? styles.dark : styles.light}/>
            <input type='text' style={dark ? styles.dark : styles.light}/>
            <button onClick={()=>{setDark(!dark)}}>Submit</button>
        </div>
    )
}