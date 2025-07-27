import type { RootState } from "../utils/appStore";
import {
  Code,
  Bell,
  MessageSquare,
  LogOut,
  UserCircle,
  CodeXml,
  UserPlus,
  LogIn,
  Images,
  Heart,
  Users,
  CrownIcon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogOuts } from "../services/AuthService";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  // console.log(user);

  const handleLogOut = async () => {
    try {
      await handleLogOuts();
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="navbar   bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/30 shadow-md xl:sticky top-0 z-30">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <Code className="text-blue-400" size={25} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              DevTinder
            </span>
            <CodeXml className="text-blue-400" size={24} />
          </div>
        </Link>
        {/* Navigation links - hidden on mobile */}
        {/* {user && (
          <div className="hidden md:flex items-center gap-4 mr-4 ">
            <Link
              to="/feed"
              className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Feed
            </Link>
            <Link
              to="/matches"
              className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Matches
            </Link>
            <Link
              to="/requests"
              className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Requests
            </Link>
          </div>
        )} */}

        {/* Notification icons
        {user && (
          <div className="flex items-center gap-2">
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
          </div>
        )} */}

        {/* Avatar dropdown */}
        {user ? (
          <div className="flex">
            <div className="hidden md:flex items-center gap-4 mr-4 ">
              <Link
                to="/feed"
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Feed
              </Link>
              <Link
                to="/matches"
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Matches
              </Link>
              <Link
                to="/requests"
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Requests
              </Link>
            </div>
            <div className="flex items-center gap-2">
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
            </div>
            <div className="dropdown dropdown-end ml-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-gray-600"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={
                      user.photoUrl ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-gray-700 rounded-lg w-52 border border-gray-600"
              >
                <li>
                  <Link
                    className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2"
                    to="/edit-profile"
                  >
                    <UserCircle className="h-4 w-4 mr-2" />
                    Profile
                    <span className="badge bg-blue-500 border-blue-500 text-white text-xs ml-auto">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/premium"}
                    className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2"
                  >
                    <CrownIcon className="h-4 w-4 mr-2" />
                    Premium
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feed"
                    className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2 lg:hidden"
                  >
                    <Images className="h-4 w-4 mr-2" />
                    Feed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/matches"
                    className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2 lg:hidden"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Matches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/requests"
                    className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2 lg:hidden"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Requests
                  </Link>
                </li>

                <li className="border-t border-gray-600">
                  <a
                    onClick={handleLogOut}
                    className="text-gray-200 hover:bg-gray-600 flex items-center px-4 py-2"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
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
