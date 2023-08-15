import axios from 'axios' 
import { FaComment } from "react-icons/fa";

import {  useContext, useEffect, useState} from 'react';
import { useRef } from 'react';
import { UseContextFunction } from '../Hooks/useWorkoutContext';
import { AuthContext } from '../Context/authcontext';
import { Link} from 'react-router-dom';
import FourIcons from './fouricons';



const Card = ({rumor,slicedcomms}) => {
  
const {rumors, dispatch} = UseContextFunction()
const {user} = useContext(AuthContext)
const myusername =user?.username


const [color,setColor] = useState(false)
const [addlink,setAddLink] = useState(true)
const [isdisabled,setIsDisabled] = useState(false)
const [like, setLike] = useState(rumor?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
const divref = useRef(null)




useEffect(() => {
const handleDivRef = (event) => {
  if(divref.current && !divref.current.contains(event.target)){
setAddLink(true)
console.log('this is how we go')
  }


}
document.addEventListener('click', handleDivRef)
return  () => {
document.removeEventListener('click',handleDivRef)
}


},[])



// the date code //
const myday = rumor.createdAt
const postday = new Date(myday)
const currentDate = new Date()
const trydate = (postday.getDate() +  " " + postday.toLocaleString('default', { month: 'long' }) + " " + postday.getFullYear())
currentDate.setHours(0,0,0,0)

//delete Icons
const handleClick = async () => {
  
   
   try {
    const deletejson = await axios.delete("http://localhost:7000/api/rumors/" + rumor._id)
    const ideleted = await deletejson.data
    
    dispatch({type:'DELETE_RUMORS', payload:ideleted})
    console.log(ideleted)

   } catch (error) {
    console.log(error)
}

  }

//knowing who can delete
  useEffect(() => {
    if(myusername !==rumor?.postedBy ){
      setIsDisabled(true)
    }
  },[myusername,rumor.postedBy])



const mystyle ={
  backgroundColor:"blue",
  borderRadius:'12px'
}
const mystyles ={
  backgroundColor:""
}




useEffect(() => {
  setIsLiked(rumor?.likes?.includes(user?._id));
}, [user?._id, rumor?.likes]);



const likeHandler = () => {
  console.log('like handler')
  try {
    axios.put("http://localhost:7000/api/rumors/" + rumor._id + "/like", { theId: user._id });
  } catch (err) {}
  setLike(isLiked ? like - 1 : like + 1);
  setIsLiked(!isLiked);
};

  
  useEffect(() => {
    if(like >= 1){
      setColor(true)
    }else{
      setColor(false)
    }
  },[like])
    

  const filterLikes = rumor?.likes?.filter(rums => rums === user?._id).map((flikes) => {
return flikes
 })
//  console.log(user?._id)
//  console.log(rumor?.likes)
//  console.log(filterLikes.length)


   


    return (
      <div>
        
        <div className="workout-details   bg-transparent" >
        <div >
        <i>@{rumor.postedBy}</i>
        <hr />
        <p>{rumor?.story}</p>
        </div> 
<div>
 
    
          <div>
  <span> <Link to={`/comments/${rumor._id}`}  className="absolute left-[45px] bottom-[12px]"  ><FaComment/></Link></span>

 </div>  
<div>

<FourIcons trydate={trydate}  mystyle={mystyle} mystyles={mystyles} handleClick={handleClick}  isdisabled={isdisabled}  rumourid={rumor?._id} likeHandler={likeHandler} like={like} color={color}/>
</div>

</div>
        </div>
  
        </div>
      );
}
 
export default Card;