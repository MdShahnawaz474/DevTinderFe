import { useEffect, useState } from "react";
import { getRequests } from "../services/DataService";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import type { RootState } from "../utils/appStore";
import { GitPullRequest, GitPullRequestClosedIcon } from "lucide-react";

// Define the UserType for nested user object
interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  about?: string;
  gender?: string;
  age?: number;
  skills: string[];
}

// Define the correct RequestType based on your actual API response
interface RequestType {
  _id: string;
  fromUserId: UserType;
  toUserId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Request = () => {
  // Handle the case where the Redux state might be null/undefined
  const requestsFromStore = useSelector((store: RootState) => store.request);
  const requests: RequestType[] = Array.isArray(requestsFromStore) ? requestsFromStore : [];
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRequest = async () => {
    try {
      setLoading(true);
      const result = await getRequests();
      console.log(result.data.data);
      if (result.success) {
        dispatch(addRequest(result.data.data));
      } else if (result) {
        setError(result.message || "Failed to fetch requests");
      }
    } catch (error: any) {
      console.error(error.message);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center  text-blue-400">
          <span className="px-6 py-2 rounded-full inline-block shadow-lg">
            Connection Requests
          </span>
        </h2>

          <h2 className="  text-pink-400 text-md italic  mb-2 text-center items-center">
              
              {"</>"} Push your story, not just your code 🔧💬
            </h2>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg text-center mx-auto max-w-md">
            <p className="font-semibold">{error}</p>
          </div>
        )}

        {!loading && !error && (!requests || requests.length === 0) && (
          <div className="bg-blue-700 p-8 rounded-lg shadow-lg text-center mx-auto max-w-md">
            <p className="text-xl">No connection requests found</p>
            <p className="mt-2 text-blue-200">Keep exploring and connecting!</p>
          </div>
        )}

        {requests && requests.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map((request: RequestType) => (
              <div
                key={request._id}
                className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-yellow-900 to-blue-900 border border-blue-400 border-opacity-20"
              >
                <div className="p-4   flex justify-center">
                  <div className="w-full aspect-square max-w-xs bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={request.fromUserId.photoUrl || "/default-avatar.png"}
                      alt={`${request.fromUserId.firstName} ${request.fromUserId.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2 -mt-6">
                    {request.fromUserId.firstName} {request.fromUserId.lastName}
                  </h3>

                  <div className="mt-2 mb-3">
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(request.fromUserId.skills) && request.fromUserId.skills.length > 0 ? (
                        request.fromUserId.skills.map(
                          (skill: string, index: number) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-purple-800/40 to-purple-600/40 px-3 py-1 rounded-full text-xs text-purple-200 border border-purple-600/30"
                            >
                              {skill.trim().charAt(0).toUpperCase() +
                                skill.trim().slice(1)}
                            </span>
                          )
                        )
                      ) : (
                        <span className="text-sm text-purple-200">
                          No skills specified
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-white mb-3">
                    {request.fromUserId.about || "No description available"}
                  </p>

                  <div className="flex justify-between items-center mt-4 text-gray-300">
                    <span className=" py-1 text-md font-semibold text-cyan-300 ">
                      Status: {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                    <span className="text-sm text-purple-200">
                      {new Date(request.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-col space-y-3">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors font-medium flex items-center justify-center">
                      <span className="mr-2">View Profile</span>
                      <span>→</span>
                    </button>
                    
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition-colors font-medium flex items-center justify-center">
                        <span className="mr-2">✓</span>
                       <span className="flex items-center">
               <GitPullRequest size={18}/> Git Add
              </span>
                      </button>
                      
                      <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition-colors font-medium flex items-center justify-center">
                        <span className="mr-2">✕</span>
                       <span className="flex items-center">

                <GitPullRequestClosedIcon size={18}/> Git Ignore
              </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;