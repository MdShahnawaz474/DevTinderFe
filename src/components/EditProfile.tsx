import React, { useEffect, useState } from "react";
import {
  Code,
  CodeXml,
  User,
 
  Save,
  Hourglass,
  Calendar,
  CircleUser,
  Image,
} from "lucide-react";
import UserProfileCardGrid from "./UserProfileCardGrid";
import { editProfile } from "../services/DataService";

const EditProfile = ({user}:any) => {
 
  // console.log(user);
  

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age || "");
const [birthDate, setBirthDate] = useState(user?.birthDate || "");

  const [gender, setGender] = useState(
  ["Male", "Female", "Others"].includes(user?.gender) ? user.gender : "Male"
);

  const [about, setAbout] = useState(user?.about);

  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [skills, setSkills] = useState(
  Array.isArray(user?.skills) ? user.skills.join(", ") : user?.skills || ""
);  

 const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" // success or error
  });

  useEffect(() => {
  if (birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge.toString());
  }
}, [birthDate]);

 const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({
      show: true,
      message,
      type
    });
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setToast(prev => ({...prev, show: false}));
    }, 3000);
  };
  const saveProfile = async(e:React.FormEvent)=>{
    e.preventDefault();
    setIsLoading(true);
    setError("");

    
    // Validate age is not empty before submitting
    if (!age || age === "") {
      setError("Please enter your birth date to calculate age");
      setIsLoading(false);
      return;
    }

    // Check if age meets minimum requirement
    if (parseInt(age) < 18) {
      setError("You must be at least 18 years old to create a profile");
      setIsLoading(false);
      return;
    }
    try {
      const result = await editProfile({
        firstName,
        lastName,
        gender,
          age: age ? parseInt(age) : undefined,


        about,
        photoUrl,
        skills: skills.split(",").map((skill:any) => skill.trim()),
        
    })

    console.log(result);
    
    
    if(!result.success){
       setError(result.message || "Failed to update profile.");
        showToast(result.message || "Failed to update profile.", "error");
    }else{
     setError(""); 
        showToast(result.message || "Profile updated successfully!");
    }
    } catch (error) {
      console.log(error);
      
      setError("An unexpected error occurred. Please try again.");
    }finally{
        setIsLoading(false);
    }
  }

  return (
   <div className="flex justify-center  bg-gradient-to-b from-gray-900 to-blue-950 gap-10 w-full">
    {/* Toast notification */}
      {toast.show && (
        <div className={`fixed mt-12 justify-center top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center transition-all duration-300 ${
          toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
          <span className="mr-2">
            {toast.type === "success" ? "✓" : "✕"}
          </span>
          <span>{toast.message}</span>
        </div>
      )}
     <div className="flex justify-center py-8  items-center  min-h-screen bg-gradient-to-b from-gray-900 to-blue-950">
      <div className="w-full max-w-md px-4">
        <div className="card bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-blue-500">
          <div className="p-8">
            <div className="flex justify-center mb-1">
              <div className="flex items-center gap-2">
                <Code className="text-blue-500" size={28} />
                <h1 className="text-3xl font-bold text-blue-400">DevTinder</h1>
                <CodeXml className="text-blue-500" size={28} />
              </div>
            </div>

            <h2 className="text-pink-400 text-sm italic mt-1 mb-2 text-center">
              {"</>"} Don’t just commit — describe yourself in detail 🔍
            </h2>

            <div className="text-center text-indigo-300 text-sm italic mt-1 mb-2">
              <p>{"</>"} Edit your developer profile</p>
              <p className="text-red-500 mt-1 not-italic">{error}</p>
            </div>

            <form className="space-y-5">
              {/* FirstName */}
              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  First name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={firstName}
                    type="text"
                    placeholder="John"
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Last name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={lastName}
                    type="text"
                    placeholder="Doe"
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar size={18} className="text-gray-500" />
                  </div>
                  <input
                    type="date"
                    value={birthDate}
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setBirthDate(e.target.value)}
                    max={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>

              {/* Display calculated age */}
              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Age
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Hourglass size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={age}
                    type="text"
                    placeholder="Calculated from birth date"
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Gender
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CircleUser size={18} className="text-gray-500" />
                  </div>
                  <select
                    value={gender}
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Photo URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Image size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={photoUrl}
                    type="text"
                    placeholder="www.img.com"
                    className="w-full py-3 pl-10 pr-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  About
                </label>
                <textarea
                  value={about}
                  placeholder="Tell us about yourself..."
                  className="w-full py-2 px-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  onChange={(e) =>
                   setAbout(e.target.value)
                  }
                />
              </div>

              <div className="form-control">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Skills
                </label>
                <textarea
                  value={skills}
                  placeholder="React, Node.js, TypeScript..."
                  className="w-full py-3 px-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={2}
                  onChange={(e) =>
                   setSkills(e.target.value)
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                onClick={saveProfile}
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isLoading ? (
                  "Saving..."
                ) : (
                  <>
                    Save Profile <Save size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Need to change your password?{" "}
                <a
                  href="/account/password"
                  className="font-medium text-pink-400 hover:text-pink-300"
                >
                  Security Settings
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Your profile information is protected by our Privacy Policy
          </p>
        </div>
      </div>
    </div>
     
     <div className=" bg-gradient-to-b from-gray-900 to-blue-950 py-16 px-4 hidden sm:block ">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold text-pink-400 text-center mt-2">Profile Preview</h1>
        <div className="flex items-center justify-center">
          <UserProfileCardGrid user={{firstName,lastName,age,gender,about,photoUrl,skills}} />
        </div>
      </div>
    </div>

    </div>
  );
};

export default EditProfile;
