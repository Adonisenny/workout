import { FaComment, FaThumbsUp, FaTrash } from "react-icons/fa";



const FourIcons = ({trydate,color,mystyle,mystyles,Liked,like,handleClick,handleClick2,isdisabled,likeHandler,rumorid}) => {
    
    return ( 
        <div>

<div>
       <p className='text-sm  md:text-sm absolute left-[150px] bottom-[10px]'>{trydate}</p>
       
          <span className='span2' style={color ? mystyle:mystyles}><button onClick={likeHandler} ><FaThumbsUp /></button></span>
          <p className="absolute left-12 bottom-2">{like}</p>
          <span> <button onClick={handleClick} disabled={isdisabled}><FaTrash/></button></span>
          

 </div>  

        </div>
     );
}
 
export default FourIcons;