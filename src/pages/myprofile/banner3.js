import { Link } from "react-router-dom";

const ProfileBanner3 = ({myprofile,handleTabChange,activeTab}) => {
    
    let PrumorLength = myprofile?.length;
    return ( 
<div className="flex flex-row gap-24 items-center justify-center">


<div>
   
    <Link   onClick={() => handleTabChange('rumors')} className={activeTab==="rumors" ? "active-tab":"inactive-tab"}><i>Rumors</i></Link>
</div>
<div>
    
    <Link  onClick={() => handleTabChange('likes')} className={activeTab==="likes" ? "active-tab":"inactive-tab"}><i>Likes</i></Link>
</div>
<div>
    
    <Link  onClick={() => handleTabChange('comments')} className={activeTab==="comments" ? "active-tab":"inactive-tab"}><i>Comments</i></Link>
</div>

</div>

     );
}
 
export default ProfileBanner3;