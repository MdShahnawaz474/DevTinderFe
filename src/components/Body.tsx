
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { getProfileData } from '../services/DataService';
import { useEffect } from 'react';
import { addUser } from '../utils/userSlice';

function Body() {
  // const [data, setData ]= useState()
  const dispatch = useDispatch();
  const getData = async()=>{
    try {
      const result = await getProfileData();
      // console.log(result);
      
    if(result){
        dispatch(addUser(result?.data));
        // console.log(result.data);
        
    }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
    <Navbar/>
    <Outlet/></div>
  )
}

export default Body