import {useContext, useEffect, useState} from "react"
import { UseContextFunction } from "../Hooks/useWorkoutContext.js"
import Card from "./Card.js"
import SearchBar from "./searchbar.js"
import { AuthContext } from "../Context/authcontext.js"
import { Link } from "react-router-dom"






const Home = () => {
    
    const {rumors,dispatch} =UseContextFunction()
    const [inputed,setInputed] =useState('')
   
    
   
   
   

    useEffect(() => {
        const fetchit = async() => {
           try {
            const response = await fetch("http://localhost:7000/api/rumors")
           
            const newrumors = await response.json()
            
           
            if(response.ok){
                 dispatch({type:'SET_RUMORS',payload:newrumors})
                   
            }
            
           } catch (error) {
            console.log(error)
           }
        }
        fetchit()

    },[dispatch])


  



    const therumours = rumors?.filter(rum => {
        if(inputed === ''){
            return rum
        }else if(rum?.postedBy?.toLowerCase().includes(inputed.toLocaleLowerCase())){
            return rum

        }

        
    }).map((rumor) => {
        return <Card
            key={rumor._id}
            rumor={rumor}
        />
    })

    




    return ( 
        <div className="Home   md:grid grid-cols-[3fr,1fr] bg-transparent">
         <div className="workout-details">
           
    {therumours}

      

    </div>
    
    
   <div className="hidden md:block">
    
    <SearchBar inputed={inputed} setInputed={setInputed} />
   
    </div>
    <div className="right-[35px] top-[200px]     md:top-[500px] md:right-[476px] fixed w-[47px] h-[47px] rounded-[50%] bg-[#9998a4] opacity-75">
<Link to ='/form' >
<img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/broom_icon_136857.png' alt="broom2" className="h-[42px] w-[42px]"/>
</Link>
</div>
        </div>
     );
}
 
export default Home;