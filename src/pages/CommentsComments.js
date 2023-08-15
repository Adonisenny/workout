import axios from "axios";
import { useEffect, useState } from "react"
import { useCommentContext } from "../Hooks/useCommentContext";
import { useLocation } from "react-router-dom";
const CommentsComments = () => {
    const{comments,dispatch2}=useCommentContext()
   const idlocate = useLocation()
   const postId = idlocate.pathname.split('/')[2]
   console.log(postId)

    const [content,setContent] = useState('')
    const[commentscomments,setCommentsComments] = useState()
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
try {
    
    const response = await axios.post(`http://localhost:7000/api/commentcomment/comments`,{
        postId,
        content,
    })
    console.log(response.data)
    setContent('')
    
} catch (error) {
    console.error(error)
    
}
    }

useEffect(() => {
    const fetchcomments = async () => {
        const res =await axios.get('http://localhost:7000/api/commentcomment/comments')
        const jsonc = await res.data
        setCommentsComments(jsonc)
        
    }
    fetchcomments()
},[])

   
    return ( 

<div>
<h3>Make a comment</h3>
<form onSubmit={handleSubmit} className="" > 
<div>
    <textarea rows={10} cols={40}
    className="bg-slate-800 rounded-2xl text-white"
    value={content}
    onChange={handleContent}
    placeholder="write your comment"
    required
>




    </textarea>
    <br />
    <button type="submit" className="bg-slate-500">Comment</button>
</div>


</form>
<div className=''>
    {/* Map the commentcomment */}
{commentscomments && commentscomments?.map((coscos) => {
return <div className="workout-details2">
    <p>{coscos?.content}</p>
    
     </div>
})}


</div>
</div>

     );
}
 
export default CommentsComments;