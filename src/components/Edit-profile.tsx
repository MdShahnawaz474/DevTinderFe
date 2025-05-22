import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import type { RootState } from '../utils/appStore'
import { useEffect } from 'react'
import { getCookie } from '../services/CookieService'
import { useNavigate } from 'react-router-dom'
import { isAuthenticateUser } from '../services/AuthService'

const EditProfiles = () => {
  const navigate = useNavigate();
    const user = useSelector((store:RootState)=>{
        return store.user
    })

     useEffect(() => {
  const token = getCookie("token");
  if (!token || !isAuthenticateUser()) {
    console.log("Redirecting to login...");
    navigate("/login");
  }
}, []);

  return user&& (
  <EditProfile user= {user}/>
  )
}

export default EditProfiles