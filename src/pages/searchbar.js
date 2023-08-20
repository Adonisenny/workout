import axios from 'axios'
import { useContext, useEffect,useState } from "react";
import { UseContextFunction } from '../Hooks/useWorkoutContext';
import { AuthContext } from '../Context/authcontext';
import { Link, useNavigate } from "react-router-dom";






const SearchBar = ({inputed,setInputed}) => {
   
    const {user,dispatch} = useContext(AuthContext);

    const myId = user?._id
     const myusername = user?.username
    console.log(user)
    
   
 
   
    //logout function 
    const handleLogout = async(e) => {
        e.preventDefault()
        dispatch({type:"SUCCESS"})
        try {
          const res = await axios.post("http://localhost:7000/api/auth/logout")
          dispatch({type:"LOGOUT",payload:res.data})
          
        } catch (error) {
          console.log(error)
        }
      }
    
   
       
      
    

    

       
   
   
    return (  
<div>
<form>
<input
type="text"
className='hidden md:block bg-slate-700'
style={{"width":"300px", "borderRadius":"12px"}}
value={inputed}
onChange={(e) => setInputed(e.target.value)}
placeholder='search blog'

/>

</form>
<br /> 

<div className=' hidden md:flex flex-col gap-4 '>

<Link to={`/profile/${user?._id}`} className='bg-slate-700 text-white p-5 rounded-[12px]'>Profile</Link>
<Link to='' className='bg-slate-700 text-white p-5 rounded-[12px]' >Advertise</Link>
<Link to={`/profilesetup/${user?._id}`} className='bg-slate-700 text-white p-5 rounded-[12px]'>Profile SetUp</Link>
{myusername ? <Link className='bg-slate-700 text-white p-5 rounded-[12px]' onClick={handleLogout}>LogOut</Link>
: <Link to='/login' className='bg-slate-700 text-white p-5 rounded-[12px]'>LogIn</Link>


}

</div>


</div>

    );
}
 
export default SearchBar;