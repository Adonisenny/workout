import { Link } from "react-router-dom";

import {AnimatePresence, motion} from 'framer-motion'
import { FaComment,  FaTrash } from "react-icons/fa";
import axios from "axios";
import { useCommentContext } from "../Hooks/useCommentContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/authcontext";
import FourIcons2 from "./fouricons2";

const CommentContent = ({matchedcomments,comment}) => {



    

        const{comments,dispatch2}=useCommentContext()
    

       
        
    const  {user} = useContext(AuthContext)
    
    
    const [like, setLike] = useState(comment?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
  const [deletbtn,setDeletBtn] = useState(false)
  const [color,setColor] = useState(false)
  const [isdisabled,setIsDisabled] =useState(false)
  const myusername = user?.username



    const likeHandler = () => {
        try {
          axios.put("http://localhost:7000/api/comments/" + comment?._id + "/like", { myid: user._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };

//delete function
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



     const handleClick3 = (id) => {
        
       }


     const mystyle ={
        backgroundColor:"#6A5ACD",
        borderRadius:'12px',
        padding:'2px'
      }
      const mystyles ={
        backgroundColor:""
      }
      useEffect(() => {
        setIsLiked(comment?.likes?.includes(user?._id));
      }, [user?._id, comment?.likes]);


      useEffect(() => {
        if(myusername !==comment?.postedBy ){
          setIsDisabled(true)
        }
      },[myusername,comment.postedBy])
    

      useEffect(() => {
        if(like >= 1){
          setColor(true)
        }else{
          setColor(false)
        }
      },[like])
        

      
    return (  
        <div>
        {matchedcomments && matchedcomments.map((match)=> {
           return <div className='workout-details2' key={match?._id}>
             <p className="absolute  right-[12px] bottom-[1px]">@{match?.postedBy}</p>
           
            
            
            <p>{match?.thecomments}</p> 
            <br/>
        
            
            <FourIcons2  likeHandler={likeHandler} like={like} mystyles={mystyles} mystyle={mystyle} color={color}/>
        
        {comments?.map((coco) => {
            return <div key={coco._id}> 
            
            
          <AnimatePresence>
            <motion.div exit={{x:"-100vh", opacity:0}}>
            
                  <span className="absolute left-[82px] bottom-2"> <button  onClick={handleDelete} disabled={isdisabled} ><FaTrash/></button></span>
                  </motion.div>
                  </AnimatePresence>
                  
                  <span> <Link to={`/comments/${coco?.myid}/commentscomments/${coco._id}`}  className="absolute left-[123px] bottom-[14px]" onClick={() => handleClick3(coco._id)} ><FaComment/></Link></span>
           
            </div>
           }) }
        
        
        </div>
            
        })
         }
            
         </div>

    );
}
 
export default CommentContent;