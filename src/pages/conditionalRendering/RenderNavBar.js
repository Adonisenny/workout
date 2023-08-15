import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";


const RenderNavbar = ({children}) => {

    const [showNavbar,setShowNavbar] = useState(false)
    const locateit = useLocation()
    const profilepath =locateit.pathname.split('/')[1]
    

useEffect(() => {

if(profilepath === 'profile'){
   
    setShowNavbar(false)
}else{
    setShowNavbar(true)
}
},[profilepath])

    return ( 

        <div>

        {showNavbar &&   children}
        </div>
     );
}
 
export default RenderNavbar;