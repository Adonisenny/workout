import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useCommentContext } from "../Hooks/useCommentContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/authcontext";
import { useLocation } from "react-router-dom";
import axios from "axios";


const ProfileBanner2 = ({myprofile}) => {
    const {user} = useContext(AuthContext);
    const{dispatch2} = useCommentContext();
    
    const [profileDetails, setProfileDetails] = useState('')
    
    const user_id = user?._id
   
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





    return (  


<div className="flex flex-col gap-6 items-center justify-center relative ">
    
<div className="md:hidden">
{(profileDetails || null ) && profileDetails?.filter(profileDetail => profileDetail?.userId === user_id).map((filteredprofile) =>{
  return <div key={filteredprofile?._id}>


 <img src={`http://localhost:7000/${filteredprofile?.imageUrl}`} alt="Not seen yet"  className="w-[110px] h-[110px] rounded-[50%]"/>
    <p>I love you Lord</p>
    <Link to={`/profilesetup/${user?._id}`} className="text-black absolute top-36 right-[240px] md:right-[660px] "><FaEdit /></Link>
  
    
    
   </div>
   
})

}
</div>

   


</div>


    );
}
 
export default ProfileBanner2;