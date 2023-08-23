import axios from 'axios';
import {createContext,useState,useContext, useEffect} from 'react'



const LikeContext = createContext();

export const useLikeContext = () => {
    return useContext(LikeContext)
}
export const LikeProvider =({children}) => {
    const [likeCount,setCount] =useState(0)
    const [reverse,setReverse] = useState(false)
    const [mycolor,setMyColor] = useState(false)

    const handleClick2 = async(postID) => {
        if(!reverse){
   
      
            setCount(prev => prev + 1)
          
           
          }else if(reverse && likeCount >= 1){
          setCount(prev => prev - 1)
         }
        setReverse(prev => !prev)
       
}

    const contextValue = {
        likeCount,
        reverse,
        mycolor,
        handleClick2
        
    };
    return <LikeContext.Provider value={contextValue}>{children}</LikeContext.Provider>
}
