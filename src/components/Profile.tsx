import type { RootState } from "../utils/appStore";
import { useDispatch, useSelector } from "react-redux"
import { getFeedData } from "../services/AuthService";
import { addfeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import UserProfileCardGrid from "./UserProfileCardGrid";

const Profile = () => {
  const feed = useSelector((store:RootState)=>store.feed);
  const dispatch = useDispatch();

  const [error , setError ] = useState<string | null>(null);
  const [isLoading,setIsLoading] = useState(false);

  const getFeed = async()=>{
   try {
     if(feed)return ;
       setIsLoading(true);
    setError(null);
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
    getFeed()
  })
  return (
  feed && ( <div className="justify-center items-center flex py-11 bg-gradient-to-b from-gray-900 to-blue-950">
     <UserProfileCardGrid user = {feed[0]}/>
   </div>)
  )
}

export default Profile