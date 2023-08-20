import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authcontext";
import { useLocation } from "react-router-dom";
import Hamburgertwo from "../../Hamburgers/hamburgers2.js";
import axios from "axios";
import { useCommentContext } from "../../Hooks/useCommentContext";
import { UseContextFunction } from "../../Hooks/useWorkoutContext";







const ProfileBanner = ({myprofile}) => {
    const {user,dispatch} = useContext(AuthContext);
    const{dispatch2} = useCommentContext();
    const {rumors} =UseContextFunction()
    const [profileDetails, setProfileDetails] = useState('')
    const [menuOpen,setMenuOpen] =useState(false)
    const user_id = user?._id
    const myusername =user?.username
    let PrumorLength = myprofile?.length;
    const idlocation = useLocation()
    const userId = idlocation.pathname.split('/')[2]    

    useEffect(() => {
        const fetchit = async() => {
      
      
            try {
            const response = await axios.get('http://localhost:7000/api/profile')
            const pdetails = await response.data
            setProfileDetails(pdetails)
          
            dispatch2({payload:pdetails})
           
        
           } catch (error) {
            console.log(error)
           }
        }
        fetchit()
    },[dispatch2,userId])


    // Logging out

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

 const profileDetail = profileDetails && profileDetails?.map((prof) => {
 return <div>{prof._id}</div>
 })



const filterit = rumors?.map((rumor) => rumor?.likes?.filter(rums => rums === user?._id))

console.log(filterit)


    return ( 

<div className="relative flex">

     
<Hamburgertwo handleLogout={handleLogout} setMenuOpen={setMenuOpen} menuOpen={menuOpen} myusername={myusername}/>

</div>

     );
}
 
export default ProfileBanner;