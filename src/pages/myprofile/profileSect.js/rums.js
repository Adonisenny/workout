import axios from 'axios';
import {useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate} from "react-router-dom";
import { UseContextFunction } from '../../../Hooks/useWorkoutContext';
import { AuthContext } from '../../../Context/authcontext';
const Rums = ({prof}) => {
   
    const {rumors} =UseContextFunction()
    const {user} = useContext(AuthContext);
    const idLocation = useLocation()
    const theId = idLocation.pathname.split('/')[2]
    let myusername = user?.username






    return (  

<div>
   {rumors?.filter(rums => rums?.postedBy === myusername).map((filterRumor) => {
return <div className='workout-details'>
    <p>{filterRumor?.story}</p>
    <p className='absolute right-[12px] bottom-[1px]'>{filterRumor?.postedBy}</p>
    
    </div>
   })}
  
</div>
    );
}
 
export default Rums;