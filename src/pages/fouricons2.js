import { FaThumbsUp, FaTrash } from "react-icons/fa";



const FourIcons2 = ({trydate,color,mystyle,mystyles,like,likeHandler}) => {
    
    return ( 
        <div>

<div>
       <p className='text-sm  md:text-sm absolute left-[150px] bottom-[10px]'>{trydate}</p>
       
          <span className='span2 absolute bottom-[10px]' style={color ? mystyle:mystyles}><button onClick={likeHandler} ><FaThumbsUp /></button></span>
          <p className="absolute left-14 bottom-[10px]">{like}</p>
         
          

 </div>  

        </div>
     );
}
 
export default FourIcons2;



