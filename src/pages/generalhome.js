ml-[175%] md:ml-[552%]








import { useContext } from "react"
import { AuthContext } from "../../Context/authcontext"
import { UseContextFunction } from "../../Hooks/useWorkoutContext"
import { Link } from "react-router-dom"
import ProfileBanner from "../myprofile/ProfileBanner.js"


const Profile = () => {
    const {user} = useContext(AuthContext)
    const {rumors} =UseContextFunction()
    
    let myusername = user?.username


    const myprofile = rumors?.filter(rums => rums?.postedBy === myusername).map(filteredrumour => {
        return filteredrumour
        
       
    }
    
    )
    
    
    
   
    return ( 
        <div>
             <div className="flex flex-col">
                
                <ProfileBanner myprofile={myprofile} />
                </div> 
                <br />
           {myprofile && myprofile.map((prof) => (
                <div className="workout-details"> 
                    
                    <p>{prof?.story}</p>
                    
                    <p className="absolute right-[12px] bottom-[1px]">@{prof?.postedBy}</p>
                    </div>
           ))}



<div className="fixed top-[500px] w-6 h-4 right-6   rounded-[50%] bg-[#9998a4] opacity-75">
<Link to ='/form' >
<img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/broom_icon_136857.png' alt="broom2" className=""/>
</Link>
</div>
        
        </div>


     );
}
 
export default Profile;   



{myprofile && myprofile.map((prof) => (
    <div className="workout-details"> 
        
       {(activeTab === 'rumors') && <div ><Rums prof={prof}/>
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

        
       
        
))}
