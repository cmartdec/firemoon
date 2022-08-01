import react from 'react'
import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Testing from './testing/Testing'
import Titlebar from './components/Titlebar'
import NewPost from './pages/NewPost'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SelfProfile from './pages/SelfProfile';
import ProfileSettings from './pages/ProfileSettings'
import ChangePassword from './pages/ChangePassword'
import ForgotPassword from './pages/ForgotPassword'
import Post from './pages/Post'
import Interviews from './pages/Interviews'
import Contribute from './pages/Contribute'
import Help from './pages/Help'
import InterviewPost from './pages/InterviewPost'
import Reset from './pages/Reset'
import DeleteAccount from './pages/DeleteAccount'
import About from './pages/About'
import FAQ from './pages/FAQ'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
     <QueryClientProvider client={queryClient}>
     <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home></Home>} />
     <Route path="signup" element={<Register></Register>} />
     <Route path="login" element={<Login></Login>} />
     <Route path="testing" element={<Testing></Testing>} />
     <Route path="new-post" element={<NewPost></NewPost>} />
     <Route path="profile" element={<Profile></Profile>} />
     <Route path="/:username" element={<SelfProfile></SelfProfile>} />
     <Route path="settings" element={<ProfileSettings></ProfileSettings>} />
     <Route path="change-password" element={<ChangePassword></ChangePassword>} />
     <Route path="forgot" element={<ForgotPassword></ForgotPassword>} />
     <Route path="reset/:token" element={<Reset></Reset>} />
     <Route path="post" element={<Post></Post>} />
     <Route path="interviews" element={<Interviews></Interviews>} />
     <Route path="contribute" element={<Contribute></Contribute>} />
     <Route path="help" element={<Help></Help>} />
     <Route path="interview-post" element={<InterviewPost></InterviewPost>} />
     <Route path="delete_account" element={<DeleteAccount></DeleteAccount>} />
     <Route path="about" element={<About></About>} />
     <Route path="faq" element={<FAQ></FAQ>} />
   </Routes>
  </BrowserRouter>
     </QueryClientProvider>
    </>


  );
}

export default App;
