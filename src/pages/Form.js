import { useContext, useEffect, useState } from "react";

import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { UseContextFunction } from "../Hooks/useWorkoutContext";
import { AuthContext } from "../Context/authcontext";




const CreateForm = ({likes}) => {
    
    const  {user} = useContext(AuthContext)
    const {dispatch} = UseContextFunction()
    let whopost = user?.username
    const myId = user?._id
    
    const navigate = useNavigate()
    const [story,setStory] =useState('')

   const [postedBy,setpostedBy] =useState(whopost)

   const [theId,settheId] =useState(myId)
     const [isdisabled,setIsDisabled] =useState(false)
    // const [reps,setReps] =useState('')
     const [Error,setError] =useState(null)
   
    
    // Protecting the form from small words
     let thelength =story.length
   useEffect(() => {
    if(thelength < 15 || thelength > 150){
        setIsDisabled(true)
       }else{
        setIsDisabled(false)
       }
   },[thelength])



   // Posting the rumor and who posted it
   
    const handleSubmit = async(e) => {
        e.preventDefault()
       
        const mypost = {story,postedBy,theId}
        
         if(!story){
           setError("Complete all fields")
          }
        
       
        try {
            const res = await axios.post('http://localhost:7000/api/rumors',mypost)
    
        const otherJson = await res.data
           
          
                
                setStory("")
                
                
                dispatch({type:'CREATE_RUMORS',payload:otherJson})
               setError(null)

               
                 navigate("/")
     } catch (error) {
            console.log(error)
           
        }
    }











    return (  
       
<form style={{"textAlign":"center", "marginTop":"10%"}}>
    <h2><i>Spread it</i></h2>
    <br />
    <label></label>
<textarea cols="50" rows="10"
className="bg-slate-700"
placeholder="Rumor"
onChange= {(e) => setStory(e.target.value)}
value={story}
style={{"borderRadius":"7px","color":"white"}}



></textarea>
<br />

<button className="bg-slate-700 text-white" disabled={isdisabled} onClick={handleSubmit} style={{'display':'inline-block'}}>Spread</button>
 &nbsp; &nbsp; &nbsp;  
<p style={{'display':'inline-bslock'}}>{thelength}</p>


{Error &&  <p style={{"backgroundColor":"white","color":"red","paddingLeft":"30px","paddingTop":"15px",'paddingBottom':'15px','borderRadius':'8px'}}>{Error}</p>}

</form>


    );
}
 
export default CreateForm;