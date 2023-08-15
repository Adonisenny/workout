const ProfileLike = ({rum}) => {
   
    return (  
<div>
<p>{rum?.story}</p>
<p className="absolute right-[12px] bottom-[1px]">{rum?.postedBy}</p>
</div>


    );
}
 
export default ProfileLike;