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
// const checkIfLiked = async(postID) => {
//     try {
//         const response = await axios.get(`http://localhost:7000/api/checklikes/${postID}`)
//         if(response.data.liked){
//             setLiked(true)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// useEffect(() => {
//     const postID = 'rumor._id'
//     checkIfLiked(postID)
// },[])
    const contextValue = {
        likeCount,
        reverse,
        mycolor,
        handleClick2
        
    };
    return <LikeContext.Provider value={contextValue}>{children}</LikeContext.Provider>
}
