import { useState } from "react";
import { BackgroundGradient } from "../ui/Background-gradient";
import { GitPullRequest, GitPullRequestClosedIcon } from "lucide-react";
import { SendAcceptReject } from "../services/DataService";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

type Skill = string;

export default function UserProfileCardGrid({ user }: { user: any}) {
     // Check if user exists
 if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-[80vh]">
        <div className="text-center p-8 rounded-lg bg-gray-900/50 max-w-md w-full mx-auto">
          <svg 
            className="mx-auto h-20 w-20 text-gray-500 mb-6"
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 21a8 8 0 0 0-16 0"></path>
            <circle cx="10" cy="8" r="5"></circle>
            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
          </svg>
          <h3 className="text-2xl font-medium text-white mb-2">No users found</h3>
          <p className="text-gray-400">
            There are currently no users available in your feed.
          </p>
        </div>
      </div>
    );
  }

  const dispatch = useDispatch();
  const [interestedHover, setInterestedHover] = useState(false);
  const [ignoreHover, setIgnoreHover] = useState(false);
  console.log(user);

  const { _id, firstName, lastName, photoUrl, age, gender, about, skills } = user;

  const ReviewSendAcceptReject = async (status: string, userId: string) => {
    try {
      const result = await SendAcceptReject(status, userId);
      console.log(result.data);
      
      if(result){
        dispatch(removeUserFromFeed(userId));
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  // Sample user data from your API response

  // Format skills as an array if it's not already
  const skillsArray: Skill[] = Array.isArray(skills)
    ? (skills as Skill[])
    : typeof skills === "string"
    ? (skills as string).split(",").map((skill: string): Skill => skill.trim())
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-6  ">
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-gradient-to-b from-yellow-900 to-blue-900 dark:bg-zinc-900">
          <div className="w-full aspect-square max-w-xs bg-gray-100 rounded-md overflow-hidden">
            <img
              src={photoUrl}
              alt={`${firstName} ${lastName}`}
              height="400"
              width="400"
              className="object-contain rounded-lg"
            />
          </div>
          
          <p className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent mt-4 mb-2">
            {firstName} {lastName}
          </p>

          {/* Improved skills section */}
          <div className="mt-1 mb-1">
            <div className="flex flex-wrap gap-2">
              {skillsArray.length > 0 ? (
                skillsArray.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-amber-800/40 to-amber-600/40 px-3 py-1 rounded-full text-xs text-amber-200 border border-amber-600/30"
                  >
                    {skill.trim().charAt(0).toUpperCase() +
                      skill.trim().slice(1)}
                  </span>
                ))
              ) : (
                <span className="text-sm text-amber-200">
                  No skills specified
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {about}
          </p>
          <div className="flex justify-between text-gray-400 text-sm mb-4 mt-2">
            <p>{gender || "Not specified"}</p>
            <p>{age?.toString() || "--"} years</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
              <span>View Profile </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                →
              </span>
            </button>
          </div>

          <div className="flex justify-between mt-8">
            <button
              className={`rounded-full px-6 py-2   text-white flex items-center justify-center space-x-1 bg-gradient-to-r from-green-500 to-emerald-600 text-lg font-bold transition-all duration-300 ease-in-out transform ${
                interestedHover
                  ? "scale-110 from-green-400 to-emerald-500 shadow-lg"
                  : ""
              }`}
              onMouseEnter={() => setInterestedHover(true)}
              onMouseLeave={() => setInterestedHover(false)}
              onClick={()=>ReviewSendAcceptReject("interested",_id)}
            >
              <span className="flex items-center" onClick={() => {}}>
                <GitPullRequest size={18} /> Git Add
              </span>
            </button>

            <button
              className={`rounded-full px-6 py-2  text-white flex items-center justify-center space-x-1 bg-gradient-to-r from-red-500 to-pink-600 text-lg font-bold transition-all duration-300 ease-in-out transform ${
                ignoreHover
                  ? "scale-110 from-red-400 to-pink-500 shadow-lg"
                  : ""
              }`}
              onMouseEnter={() => setIgnoreHover(true)}
              onMouseLeave={() => setIgnoreHover(false)}
              onClick={()=>ReviewSendAcceptReject("ignored",_id)}
            >
              <span className="flex items-center">
                <GitPullRequestClosedIcon size={18} /> Git Ignore
              </span>
            </button>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
