
import { useContext, useState } from "react"
import { AuthContext } from "../../Context/authcontext"
import { UseContextFunction } from "../../Hooks/useWorkoutContext"
import { Link } from "react-router-dom"
import ProfileBanner from "../myprofile/ProfileBanner.js"
import ProfileBanner2 from "../banner2"
import ProfileBanner3 from "./banner3"
import Hamburgertwo from "../../Hamburgers/hamburgers2"
import axios from "axios"
import { useLocation } from "react-router-dom";
import Rums from "./profileSect.js/rums"
import ProfileLike from "./profileSect.js/profileLike"
import ProfileComments from "./profileSect.js/profileComments"


const Profile = () => {
    
    const {rumors} =UseContextFunction()
    const {user,dispatch} = useContext(AuthContext);
    const [menuOpen,setMenuOpen] =useState(false)
    const [testing,setTesting] = useState(false)
    const [activeTab,setActiveTab] = useState("rumors")
    let myusername = user?.username
    const idlocation = useLocation()
    const userId = idlocation.pathname.split('/')[2]
   

    const myprofile = rumors?.filter(rums => rums?.postedBy === myusername).map(filteredrumour => {
        return filteredrumour
        
       
    }
    
    )
    console.log(user)

   
  
    const mylikes = rumors?.filter(rums => rums?.postedBy === myusername).map(filteredrumour => {
      return filteredrumour
      
     
  }
  
   )

   const handleTabChange = (tab) => {
    setActiveTab(tab);
  };





 
  
  
  
    
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
      
      

      
   
    return ( 
      <div>
        {/* my buttons */}
       {/* The banner */}
             <div className="flex flex-col">
                
                <ProfileBanner2  />
                <br /> <br /> <br />
                <ProfileBanner3 myprofile={myprofile} handleTabChange={handleTabChange} activeTab={activeTab}/>
                <Hamburgertwo handleLogout={handleLogout} setMenuOpen={setMenuOpen} menuOpen={menuOpen} myusername={myusername}/>
                </div> 




                <br />
           
                <div className="workout-details"> 

                

        { (activeTab === 'rumors') && <div ><Rums />
        
        </div>}
        
       
   


                  
           { (activeTab === "likes") &&<div>
                 {rumors?.map((rum) =>rum?.likes.filter(like => userId===like).map((outing) => {
                return <div className="workout-details">
                  
                  <ProfileLike rum={rum}/>
                </div>
           }) )}
           </div>}

           {(activeTab === "comments") &&
           <div>
            <ProfileComments />
            </div>}
           </div>
 
                    
                   
                    
           



<div className="right-[35px] top-[200px]     md:top-[500px] md:right-[476px] fixed w-[47px] h-[47px] rounded-[50%] bg-[#9998a4] opacity-75">
<Link to ='/form' >
<img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/broom_icon_136857.png' alt="broom2" className="h-[42px] w-[42px]"/>
</Link>
</div>
  
       
   </div>

     );
}
 
export default Profile;   