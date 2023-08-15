import axios from 'axios'
import { useEffect,useState } from "react";







const SearchBar = ({inputed,setInputed}) => {
    
   
    

       
   
   
    return (  
<div>
<form>
<input
type="text"
className='hidden md:block'
style={{"width":"300px", "backgroundColor":"grey", "borderRadius":"12px"}}
value={inputed}
onChange={(e) => setInputed(e.target.value)}
placeholder='search blog'

/>

</form>

</div>

    );
}
 
export default SearchBar;