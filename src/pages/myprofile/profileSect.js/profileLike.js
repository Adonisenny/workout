const ProfileLike = ({rum}) => {
   
    return (  
<div>
<p>{rum?.story}</p>
<p className="absolute right-[12px] bottom-[1px] bg-slate-800 rounded-[12px] p-[4px]" style={{color:"white"}}>{rum?.postedBy}</p>
</div>


    );
}
 
export default ProfileLike;