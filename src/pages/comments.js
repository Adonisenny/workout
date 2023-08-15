import { useContext, useEffect, useState } from "react";
import { UseContextFunction } from "../Hooks/useWorkoutContext";
import { useCommentContext } from "../Hooks/useCommentContext";
import axios from "axios";
import { FaComment, FaThumbsUp, FaTrash } from "react-icons/fa";
import '../MycssPages/commentcss.css'
import { AuthContext } from "../Context/authcontext";
import { Link,useLocation,useParams } from 'react-router-dom';
import CommentsComments from "./CommentsComments";


const Comments = ({rumor,slicedcomms}) => {
  
    //  const {dispatch,rumors} = UseContextFunction()
    const{comments,dispatch2}=useCommentContext()

    // const routerParams = useParams()
    const location =useLocation()
    const locateAccount = location.pathname.split('/')[2]
const  {user} = useContext(AuthContext)
const [thecomments,setTheComments] =useState('')
const [myid,setMyId] = useState(locateAccount)

const postedBy = user?.username
const [isdisabled,setIsDisabled] =useState(false)
const [likes,setLikes] = useState(0)
const [reverse,setReverse] = useState(false)
const [myColor, setMyColor] = useState(false)
const [deletbtn,setDeletBtn] = useState(false)
    
   
   
//Post comments
    const handleSubmit = async(e) => {
        e.preventDefault()
       
       
        try {
            const myComments = {thecomments,postedBy,myid}
            const res = await axios.post('http://localhost:7000/api/comments',myComments)
            
        const otherJson = await res.data
           
          console.log(otherJson)
                
                // setComments([...Comments,res.data])
                 setTheComments('')
               
                
                
                dispatch2({type:'CREATE_COMMENTS',payload:otherJson})
              
               
      } catch (error) {
             console.log(error)
           
        }
    }
    const handleClick3 = (id) => {
         console.log(id)
        }

const handleDelete = async() => {
   comments.map(async (slicedcomms) => {
   try {
        const trydelete = await axios.delete('http://localhost:7000/api/comments/' + slicedcomms?._id)
        const deletedComments =await trydelete.data
       
        dispatch2({type:'DELETE_COMMENTS', payload:deletedComments})
    } catch (error) {
        console.log('It has not been deleted')
    }
})
}






    let thelength =thecomments.length
    useEffect(() => {
        if(thelength < 15 || thelength > 150){
            setIsDisabled(true)
           }else{
            setIsDisabled(false)
           }
       },[thelength])




//withdraw out the comments
    useEffect(() => {
        const fetchit = async() => {
      
      
            try {
            const response = await axios.get("http://localhost:7000/api/comments")
           const comms = response.data
          
          
            dispatch2({type:'SET_COMMENTS',payload:comms})
           
        
           } catch (error) {
            console.log(error)
           }
        }
        fetchit()
    },[dispatch2])
    
  



// stamp date



 const myday = slicedcomms?.createdAt
const postday = new Date(myday)
const currentDate = new Date()
const trydate = (postday.getDate() +  " " + postday.toLocaleString('default', { month: 'long' }) + " " + postday.getFullYear())
currentDate.setHours(0,0,0,0)


// Filtering out comments and matching the one that matches with post


const matchedcomments = comments?.filter(cums =>cums?.myid === locateAccount).map(filteredrumour => {
    return filteredrumour
    
}


)

    // Like button
const handleClick2 = () => {
    if(reverse ){
   setLikes(likes - 1)
    setMyColor(true)

}else if(rumor.postedBy){
  setLikes(likes+1)
}

else{
  setLikes(likes + 1)
  
}
setReverse(!reverse)
setMyColor(!myColor)
}
const mystyle ={
    backgroundColor:"blue",
    borderRadius:'12px'
  }
  const mystyles ={
    backgroundColor:""
  }





  


    return ( 
        <div>
        <form className="text-center ">
<textarea cols="50" rows="4" 

className=" bg-black text-red rounded-lg"
value={thecomments}
onChange={(e) =>setTheComments(e.target.value)}
style={{"borderRadius":"4px","color":"white"}}
>
</textarea>
<br />
<button onClick={handleSubmit}  disabled={isdisabled} className=" text-[10px] ">comment</button>

</form>
<br />







 <div>
{matchedcomments && matchedcomments.map((match)=> {
   return <div className='workout-details2'>
     <p className="absolute  right-[12px] bottom-[1px]">@{match?.postedBy}</p>
   
    
    
    <p>{match?.thecomments}</p> 
    <br/>

    


{comments?.map((coco) => {
    return <div> 
    
    
    <span className='absolute left-6 bottom-2'  style={myColor ? mystyle:mystyles} ><button  onClick={handleClick2}><FaThumbsUp /></button></span>
          <p className="absolute left-12 bottom-2">{likes}</p>
    
          <span className="absolute left-16 bottom-2"> <button  onClick={handleDelete} disabled={deletbtn} ><FaTrash/></button></span>

          <span> <Link to={`/commentscomments/${coco._id}`}  className="absolute left-[97px] bottom-[14px]" onClick={() => handleClick3(coco._id)} ><FaComment/></Link></span>
    {console.log(coco._id)}
    </div>
   }) }

</div>
    
})
 }
    
 </div>

</div>

     );
}
 
export default Comments;