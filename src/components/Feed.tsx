import type { RootState } from "../utils/appStore";
import { useDispatch, useSelector } from "react-redux"
import { getFeedData, isAuthenticateUser } from "../services/AuthService";
import { addfeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import UserProfileCardGrid from "./UserProfileCardGrid";
import { getCookie } from "../services/CookieService";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const feed = useSelector((store:RootState)=>store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [error , setError ] = useState<string | null>(null);
  const [isLoading,setIsLoading] = useState(false);

  const getFeed = async()=>{
     if(feed)return ;
   try {
    const result = await getFeedData();
    // console.log(result.data);
    
    dispatch(addfeed(result.data)); 
   } catch (error:any) {
    setError(error.message || 'Failed to load feed');
    console.error('Error:', error);
   }finally{
     setIsLoading(false);
   } 
  }

  useEffect(()=>{
  const token = getCookie("token");
  if (!token || !isAuthenticateUser()) {
    console.log("Redirecting to login...");
    navigate("/login");
  }
    getFeed()
  },[]);



   
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      <p className="text-white">Loading...</p>
    </div>;
  }
  
  if (error) {
    return <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      <p className="text-red-500">{error}</p>
    </div>;
  }
  return (
  feed && ( <div className="justify-center items-center flex py-11 bg-gradient-to-b from-gray-900 to-blue-950">
     <UserProfileCardGrid user = {feed[0]}/>
   </div>)
  )
}

export default Feed