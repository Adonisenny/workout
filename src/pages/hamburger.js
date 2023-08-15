import {RiCloseLine} from 'react-icons/ri'
import {HiOutlineMenu} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { AuthContext } from '../Context/authcontext';

const Hamburger = ({menuOpen,setMenuOpen,handleLogout,myusername}) => {
    // const divref = useRef(null)
    // const divref2 = useRef(null)
    const {user} = useContext(AuthContext);
    // const [visible,setVisible] =useState(false)
    const handleclick = () => {
        setMenuOpen(false)
        // setVisible(true)
    }



    // useEffect(() => {
    //   const handleClickout = (event) => {
    //     if(divref.current && !divref.current.contains(event.target) && !divref2.current.contains(event.target)){
    //      setVisible(true)
    //      console.log('whats happening')
    //     }
    //   }
    //   document.addEventListener('click',handleClickout)
    //   console.log('check it out')
    //   return () => {
    //     document.removeEventListener('click', handleClickout)
    //   }

    // },[])





    
   
       



    return ( 
        <>
<div   className="absolute cursor-pointer md:hidden block top-7 right-2">

  {menuOpen ? (
    <RiCloseLine onClick={handleclick} className='w-6 h-6 text-black mr-2' />
):
<HiOutlineMenu  onClick ={() => setMenuOpen(true)} className='w-6 h-6 text-black mr-2'  />
}  


</div>


<div className={`absolute top-0 h-screen w-1/3 bg-gradient-to-tl from-white/10 to-[#9998a4] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${ menuOpen ?'left-0':'-left-full'}`}>





{myusername ? <Link to={`/profile/${user._id}`} onClick={handleclick}>Profile</Link>:  <Link to='/login'>Login</Link>}
<br />
{myusername ? <Link onClick={handleLogout}    >Logout</Link>:  <Link to='/register'>Register</Link>}



<br />
<p>Watch videos</p>

    </div>
    </>


     );
}
 
export default Hamburger;