import { useContext, useState } from "react";
import { AuthContext } from "../Context/authcontext";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { Link } from "react-router-dom";



const Loginform = () => {
    const {dispatch} = useContext(AuthContext)

    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')
    const [Error,setError] =useState(null)
     const navigate = useNavigate()
    


    const handleSubmit = async(e) => {
        e.preventDefault()
        const loginfo= {username,password}
        if(!username && !password){
            setError("Complete all fields")
        }
        dispatch({type:"LOGIN_START"})
       
        try {
            const res = await axios.post('http://localhost:7000/api/auth/login',loginfo)
             const otherJson = await res.data
           
            
                setUsername("")
                setPassword("")
                
                dispatch({type:"LOGIN_SUCCESS",payload:otherJson})
                setError(null)
                navigate('/')


        } catch (error) {
            setError("Something went wrong")
           
        }
    }
    return (  
<form className="container">
    <h3>Login</h3>
    <br></br>
    

<label>Username</label>
<input 
className="myinput"
type= "text"
placeholder="username"
onChange= {(e) => setUsername(e.target.value)}
value={username}


/>
<label>Password</label>
<input 
className="myinput"
type="password"
placeholder="password"
onChange= {(e) => setPassword(e.target.value)}
value={password}


/>
<button onClick={handleSubmit}>Submit</button>
{Error &&  <p style={{"backgroundColor":"white","color":"red","paddingLeft":"30px","paddingTop":"15px",'paddingBottom':'15px','borderRadius':'8px'}}>{Error}</p>}
<p>If you are not registered <Link to='/register'>Register</Link></p>
</form>


    );
}
 
export default Loginform;