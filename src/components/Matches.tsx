import { useEffect, useState } from "react";
import { getConnections } from "../services/DataService";
import type { Connection } from "../types/Types";
import { useDispatch } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Matches = () => {
  const dispatch = useDispatch();
  const [connections, setConnections] = useState<Connection[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchConnection = async () => {
    try {
      setLoading(true);
      const result = await getConnections();
      if (result.success) {
        setConnections(result.data.data || []);
        dispatch(addConnections(result.data.data));
      } else if (result) {
        setError(result.message || "failed to fetch connections");
      } else {
      }
    } catch (error: any) {
      console.error(error.message);
      setError("An Unexpected error occured ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950  text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
          <span className=" px-6 py-2 rounded-full inline-block shadow-lg">
            Your Matches
          </span>
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

        {!loading && !error && connections.length === 0 && (
          <div className="bg-blue-700 p-8 rounded-lg shadow-lg text-center mx-auto max-w-md">
            <p className="text-xl">No connections found yet</p>
            <p className="mt-2 text-blue-200">Start swiping to find matches!</p>
          </div>
        )}

        {connections.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {connections.map((connection) => (
              <div
                key={connection._id}
                className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-yellow-900 to-blue-900 border border-blue-400 border-opacity-20"
              >
                <div className="p-4 bg-brown-600 flex justify-center">
                  <div className="w-full aspect-square max-w-xs bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={connection.photoUrl || "/default-avatar.png"}
                      alt={`${connection.firstName} ${connection.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2 -mt-6  ">
                    {connection.firstName} {connection.lastName}
                  </h3>

                  <div className="mt-2 mb-3">
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(connection.skills) &&
                      connection.skills.length > 0 ? (
                        connection.skills.map(
                          (skill: string, index: number) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-amber-800/40 to-amber-600/40 px-3 py-1 rounded-full text-xs text-amber-200 border border-amber-600/30"
                            >
                              {skill.trim().charAt(0).toUpperCase() +
                                skill.trim().slice(1)}
                            </span>
                          )
                        )
                      ) : (
                        <span className="text-sm text-amber-200">
                          No skills specified
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-white mb-3">
                    {connection.about || "This is default value of the user"}
                  </p>

                  <div className="flex justify-between items-center mt-4 text-gray-300">
                    <span>{connection.gender}</span>
                    <span>{connection.age}</span>
                  </div>

                  <div className="mt-6 flex flex-col space-y-3">
                    <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors font-medium flex items-center justify-center">
                      <span className="mr-2">View Profile</span>
                      <span>→</span>
                    </button>
                    {/*                     
                    <div className="flex space-x-4">
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full transition-colors font-medium flex items-center justify-center">
                        <span className="mr-2">⚙️</span>
                        <span>Git Add</span>
                      </button>
                      
                      <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full transition-colors font-medium flex items-center justify-center">
                        <span className="mr-2">⚙️</span>
                        <span>Git Ignore</span>
                      </button>
                    </div> */}
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

export default Matches;

// <div>
//       <h2>Matches</h2>
//       {loading && <p>Loading connections...</p>}
//       {error && <p className="error">{error}</p>}
//       {!loading && !error && connections.length === 0 && (
//         <p>No connections found</p>
//       )}
//       {connections.length > 0 && (
//         <div className="connections-grid">
//           {connections.map((connection) => (
//             <div key={connection._id} className="connection-card">
//               <img
//                 src={connection.photoUrl}
//                 alt={`${connection.firstName} ${connection.lastName}`}
//               />
//               <h3>{connection.firstName} {connection.lastName}</h3>
//               <p>{connection.about}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
