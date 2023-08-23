import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/authcontext";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import { Link } from "react-router-dom";


const Regform = () => {
    const {dispatch} = useContext(AuthContext)
    const [email,setEmail] =useState('')
    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')
    const [Error,setError] =useState(null)
    const [isdisabled,setIsdisabled] =useState(true)
    const[allUsername,setAllUsername] =useState('')
    const navigate = useNavigate()
    
const mymail= email.includes('@')


    

    const handleSubmit = async(e) => {
        e.preventDefault()
        const information= {email,username,password}
        if(!email && !username && !password){
            setError("Complete all fields")
        }
        dispatch({type:"LOGIN_START"})
       
        try {
            const res = await axios.post('http://localhost:7000/api/auth/register',information)
             const otherJson = await res.data
           
            
                setUsername("")
                setPassword("")
                setEmail("")
                dispatch({payload:otherJson})
                setError(null)
                navigate('/login')
            
        } catch (error) {
            setError("Something went wrong")
            // setEmptyField(otherJson.emptyField)
        }
    }
    useEffect(() => {
                const fetchit = async() => {
              
              
                    try {
                    const response = await axios.get('http://localhost:7000/api/auth/users')
                    const allusers = await response.data
                   
                    setAllUsername(allusers)
            
                   } catch (error) {
                    console.log(error)
                   }
                }
                fetchit()
            },[username])
          





const tryusers =allUsername && allUsername?.map((allu) => {
  return allu?.username
})
const checkusers = tryusers?.includes(username)
useEffect(()=> {
    if(checkusers){
        setError('username already exist')
    }else{
        setError('')
    }
},[checkusers])



    const  passwordLength =password.length
    useEffect(()=>{
        if(passwordLength >=8 && mymail && !checkusers){
            setIsdisabled(false)
        }else{
            setIsdisabled(true)
        }
    },[passwordLength,mymail,checkusers])
    return (  
<form className="container">
    <h3>Register</h3>
    <br></br>
    <label>Email</label>
<input 
className="myinput rounded-2xl"
type="text"
placeholder="Email"
onChange= {(e) => setEmail(e.target.value)}
value={email}


/>
<label>Username</label>
<input 
className="myinput rounded-2xl bg-[#333]"
type= "text"
placeholder="username"
onChange= {(e) => setUsername(e.target.value)}
value={username}


/>
<label>Password</label>
<input 
className="myinput rounded-2xl"
type="password"
placeholder="password with 8 or more characters"
onChange= {(e) => setPassword(e.target.value)}
value={password}


/>

<button onClick={handleSubmit} disabled={isdisabled}>Submit</button>
<br /> <br />
{Error &&  <p style={{"backgroundColor":"white","color":"red","paddingLeft":"30px","paddingTop":"15px",'paddingBottom':'15px','borderRadius':'8px'}}>{Error}</p>}
<p>If you are registered <Link to='/login' className='loglink'>Login.</Link></p>
</form>


    );
}
 
export default Regform;