import { useState } from "react";
import { useCommentContext } from "../../Hooks/useCommentContext";
import axios from "axios";
import { useLocation, useNavigate} from "react-router-dom";

const ProfileSetUP = () => {
    const {dispatch2} =useCommentContext()
    const idlocation = useLocation()
    const userId = idlocation.pathname.split('/')[2]
    const [bio,setBio] = useState('')
    const [image,setPImg] = useState('')
   const navigate = useNavigate()
   
    const handleUploads = async(e) => {
e.preventDefault()
const formData = new FormData()
formData.append('bio',bio)
formData.append('image',image)
formData.append('userId',userId)


try{
    const response = await axios.post('http://localhost:7000/api/profile',formData)
    const otherjson = await response.data
  
    dispatch2({payload:otherjson})
    navigate(`/profile/${userId}`)
}catch(error){
    console.log({error})
}
    }


   
    return ( 

<form  className="text-center mt-[9%]">
<label>Bio</label>
<textarea
cols='40' rows='8'
style={{"borderRadius":"12px","color":"white"}}
className="bg-slate-700"
value={bio}
onChange={(e) => setBio(e.target.value)}
placeholder="write something about you"

>
</textarea>
<input 
type="file"
multiple
accept=".jpg,.png"


id='image'
className="w-[230px] bg-slate-600 rounded-xl ml-[25%] md:ml-[42%]"
onChange={(e) => setPImg(e.target.files[0])}
/>
<button onClick={handleUploads} className="bg-slate-700 text-sm text-white">Upload</button>
</form>


     );
}
 
export default ProfileSetUP;