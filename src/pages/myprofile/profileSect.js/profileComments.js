import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/authcontext";
import { useCommentContext } from "../../../Hooks/useCommentContext";
import axios from 'axios'
import {useEffect} from 'react'

const ProfileComments = () => {
const{comments,dispatch2}=useCommentContext()
const {user} = useContext(AuthContext);
const [error, setError] = useState()

useEffect(() => {
    const fetchit = async() => {
  
  
        try {
        const response = await axios.get("http://localhost:7000/api/comments")
       const comms = await response.data
      
      
        dispatch2({type:'SET_COMMENTS',payload:comms})
       
    
       } catch (error) {
        setError({error:'comments not found'})
       }
    }
    fetchit()
},[dispatch2])


    return ( 

        <div>
   {comments?.filter(comms => comms?.postedBy ===user?.username).map((co)=>{
    return <div>
        <p>{co?.thecomments}</p>
        <p className="absolute  right-[12px] bottom-[1px] bg-slate-800 rounded-[12px] p-[4px]">{co?.postedBy}</p>
        </div>
   })
   
   
   }
 </div> 
    )
}
export default ProfileComments