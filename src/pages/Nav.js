import { Link } from 'react-router-dom'
import { AuthContext } from "../Context/authcontext";
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Hamburger from './hamburger';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
 
   const  {user,dispatch} = useContext(AuthContext)
  const myusername =user?.username
  const [menuOpen,setMenuOpen] =useState(false)
  const [isdisabled,setIsDisabled] = useState(false)

const location = useLocation()
  const locateProfile = location.pathname.split('/')[1]
 
  const handleLogout = async(e) => {
    e.preventDefault()
    dispatch({type:"SUCCESS"})
    try {
      const res = await axios.post("http://localhost:7000/api/auth/logout")
      dispatch({type:"LOGOUT",payload:res.data})
      setMenuOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(() => {
  if(!user){
    setIsDisabled(true)
  }else{
    setIsDisabled(false)
  }

},[user])
 
  const handledisappear = () => {

  }

  // if (!user) {
  //   return redirect("/login");
  // }
  return (
    <header>
      <div><Link to="/">
          <h2>OnlyRumors</h2>
        </Link></div>
        <hr/>
      <div className="container">
        
        {!myusername && <Link to="/registration" style={{"textDecoration":"none", "display":"flex"}}>Register here</Link>}
       {myusername&& <Link to={`/profile/${user._id}`}  style={{"textDecoration":"none", "display":"flex"}}>{myusername}</Link>}
      
       
        {myusername && <button onClick={handleLogout}className='hidden md:block'>Logout</button> }
        <Link to='/form' onClick={handledisappear} disabled={isdisabled} className='mr-16'>Spread</Link>
      </div>
      <div>
    <Hamburger setMenuOpen={setMenuOpen} menuOpen={menuOpen} handleLogout={handleLogout} myusername={myusername}/>
    </div>
    </header>
  )
}

export default Navbar