import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Navbar from "./pages/Nav";
import CreateForm from "./pages/Form";

import Regform from "./pages/regForm";
import Loginform from "./pages/LoginForm";
import Profile from "./pages/myprofile/Profile.js";
import Comments from "./pages/comments";
import MyComments from "./pages/mycomment.js";
import { useLocation } from 'react-router-dom';
import RenderNavbar from "./pages/conditionalRendering/RenderNavBar";
import ProfileSetUP from "./pages/myprofile/ProfileSetUp.js";
import CommentsComments from "./pages/CommentsComments";
import Likes from "./pages/myprofile/Like";


function App() {
 
  return (
   <>
   <div>
  
   
    <BrowserRouter>
    <RenderNavbar>
   <Navbar /> 
   </RenderNavbar>
  <div className="pages">
    <Routes>
<Route 
path="/"
element = {<Home />}
/>

<Route 
path="/form"
element = {<CreateForm />}
/>
<Route 
path="/registration"
element = {<Regform />}
/>
<Route 
path="/login"
element = {<Loginform />}
/>
<Route 
path="/profile/:_id"
element={<Profile />}

/>
<Route 
path="/comments/:_id"
element={<Comments/>}

/>
<Route 
path="/mycomment"
element={<MyComments/>}

/>

<Route 
path="/profilesetup/:_id"
element={<ProfileSetUP/>}

/>

<Route 
path="/commentscomments/:_id"
element={<CommentsComments/>}

/>
<Route 
path="/profile/likes/:_id"
element={<Likes/>}

/>
    </Routes>


  </div>
    
    
    </BrowserRouter>

   </div>
   
   
   </>
  );
}

export default App;



