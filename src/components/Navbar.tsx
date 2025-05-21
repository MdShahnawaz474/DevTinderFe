import type { RootState } from "../utils/appStore";
import { Code, Bell, MessageSquare, Settings, LogOut, UserCircle, CodeXml, UserPlus, LogIn,  } from "lucide-react";
import  { useDispatch, useSelector } from "react-redux";
import {handleLogOuts} from "../services/AuthService"
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const user = useSelector((store:RootState)=>store.user)
  const dispatch = useDispatch();

  // console.log(user); 

  const handleLogOut = async()=>{
    try {
      await handleLogOuts()
      dispatch(removeUser())
      navigate("/login")
    } catch (error) {
      
    }
  }

 
  return (
    <div className="navbar   bg-gray-800 border-b border-blue-500 shadow-md xl:sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between">
        {/* Logo section */}
        <div className="flex-1">
          <a href="/" className="flex items-center py-2 gap-2">
            <Code className="text-blue-500" size={24} />
            <span className="text-2xl font-bold text-blue-400">DevTinder</span>
            <CodeXml className="text-blue-500" size={24} />
          </a>
        </div>

        
        {/* Navigation links - hidden on mobile */}
        {user && 
        <div className="hidden md:flex items-center gap-4 mr-4 ">
          <Link to="/feed" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium">
            Feed
          </Link>
          <Link to="/matches" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium">
            Matches
          </Link>
          <Link to="/requests" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium">
            Requests
          </Link>
        </div>}

        {/* Notification icons */}
       { user && <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Bell className="text-gray-300 h-5 w-5" />
              <span className="indicator-item badge badge-xs badge-primary bg-blue-500 border-blue-500"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MessageSquare className="text-gray-300 h-5 w-5" />
              <span className="indicator-item badge badge-xs badge-primary bg-blue-500 border-blue-500"></span>
            </div>
          </button>
        </div>}

        {/* Avatar dropdown */}
       {user ? (<div className="dropdown dropdown-end ml-2">
         
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-gray-600">
            
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src={user.photoUrl ||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-gray-700 rounded-lg w-52 border border-gray-600"
          >
            <li>
              <Link className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2" to="/edit-profile">
                <UserCircle className="h-4 w-4 mr-2" /> 
                Profile
                <span className="badge bg-blue-500 border-blue-500 text-white text-xs ml-auto">New</span>
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </li>
            <li className="border-t border-gray-600">
              <a   onClick={handleLogOut} className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </a>
            </li>
          </ul>
        </div>):(
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 border border-blue-500 rounded-md px-3 py-1.5 text-sm font-medium"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </a>
            <a
              href="/signup"
              className="flex items-center gap-1 bg-blue-500 text-white rounded-md px-3 py-1.5 text-sm font-medium hover:bg-blue-600"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </a>
          </div>
        )}


      </div>
    </div>
  );
};

export default Navbar;