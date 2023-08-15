import { Link } from "react-router-dom";

const ProfileBanner3 = ({myprofile,handleTabChange,activeTab}) => {
    
    let PrumorLength = myprofile?.length;
    return ( 
<div className="flex flex-row gap-24 items-center justify-center">


<div>
    <p>{PrumorLength}</p>
    <Link   onClick={() => handleTabChange('rumors')} className={activeTab==="rumors" ? "active-tab":"inactive-tab"}>Rumors</Link>
</div>
<div>
    <p>12</p>
    <Link  onClick={() => handleTabChange('likes')} className={activeTab==="likes" ? "active-tab":"inactive-tab"}>Likes</Link>
</div>
<div>
    <p>11</p>
    <Link  onClick={() => handleTabChange('comments')} className={activeTab==="comments" ? "active-tab":"inactive-tab"}>Comments</Link>
</div>

</div>

     );
}
 
export default ProfileBanner3;