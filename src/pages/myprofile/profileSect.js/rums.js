import {useContext } from 'react'
import { UseContextFunction } from '../../../Hooks/useWorkoutContext';
import { AuthContext } from '../../../Context/authcontext';
const Rums = ({prof}) => {
   
    const {rumors} =UseContextFunction()
    const {user} = useContext(AuthContext);
     let myusername = user?.username
return (  

<div>
   {rumors?.filter(rums => rums?.postedBy === myusername).map((filterRumor) => {
return <div className='workout-details'>
    <p>{filterRumor?.story}</p>
    <p className='absolute right-[12px] bottom-[1px] bg-slate-800 rounded-[12px] p-[4px]'style={{color:"white"}}>{filterRumor?.postedBy}</p>
    
    </div>
   })}
  
</div>
    );
}
 
export default Rums;