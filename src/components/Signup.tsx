import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Calendar, Camera, Mail, Lock, CodeXml, Code, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SignupData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  birthday: string;
  photoUrl: string;
}

const MultiStepSignup: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SignupData>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    birthday: '',
    photoUrl: ''
  });
  const [errors, setErrors] = useState<Partial<SignupData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 3;

  const handleInputChange = (field: keyof SignupData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<SignupData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (formData.username.length < 3) newErrors.username = 'Username must be at least 3 characters';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<SignupData> = {};
    
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.birthday) newErrors.birthday = 'Birthday is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Signup data:', formData);
      alert('Account created successfully!');
      setIsLoading(false);
      navigate('/login');
    }, 2000);
  };

  const renderProgressBar = () => (
    <div className="mb-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-5">
      <div className="text-center mb-6">
        <User className="mx-auto h-5 w-5 text-blue-400 mb-3" />
        <h3 className="text-xl font-bold text-gray-100">Basic Information</h3>
        <p className="text-gray-400 text-sm mt-1">Let's start with your details</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="form-control">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`w-full py-3 px-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.firstName ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="John"
          />
          {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
        </div>
        
        <div className="form-control">
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`w-full py-3 px-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.lastName ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Username
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User size={18} className="text-gray-500" />
          </div>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            className={`w-full py-3 pl-10 pr-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.username ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="johndoe123"
          />
        </div>
        {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
      </div>

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail size={18} className="text-gray-500" />
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full py-3 pl-10 pr-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="your@email.com"
          />
        </div>
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Lock size={18} className="text-gray-500" />
          </div>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className={`w-full py-3 pl-10 pr-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.password ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="••••••••"
          />
        </div>
        {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-5">
      <div className="text-center mb-6">
        <Calendar className="mx-auto h-10 w-10 text-blue-400 mb-3" />
        <h3 className="text-xl font-bold text-gray-100">Personal Details</h3>
        <p className="text-gray-400 text-sm mt-1">Tell us a bit more about yourself</p>
      </div>

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Gender
        </label>
        <select
          value={formData.gender}
          onChange={(e) => handleInputChange('gender', e.target.value)}
          className={`w-full py-3 px-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.gender ? 'border-red-500' : 'border-gray-600'
          }`}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender}</p>}
      </div>

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Birthday
        </label>
        <input
          type="date"
          value={formData.birthday}
          onChange={(e) => handleInputChange('birthday', e.target.value)}
          className={`w-full py-3 px-3 bg-gray-700 border text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            errors.birthday ? 'border-red-500' : 'border-gray-600'
          }`}
        />
        {errors.birthday && <p className="text-red-400 text-sm mt-1">{errors.birthday}</p>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-5">
      <div className="text-center mb-6">
        <Camera className="mx-auto h-10 w-10 text-blue-400 mb-3" />
        <h3 className="text-xl font-bold text-gray-100">Profile Picture</h3>
        <p className="text-gray-400 text-sm mt-1">Add a profile picture (optional)</p>
      </div>

      <div className="form-control">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Photo URL
        </label>
        <input
          type="url"
          value={formData.photoUrl}
          onChange={(e) => handleInputChange('photoUrl', e.target.value)}
          className="w-full py-3 px-3 bg-gray-700 border border-gray-600 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://example.com/your-photo.jpg"
        />
        <p className="text-sm text-gray-400 mt-1">
          Enter a URL to your profile picture, or leave blank to skip
        </p>
      </div>

      {formData.photoUrl && (
        <div className="text-center">
          <img
            src={formData.photoUrl}
            alt="Profile preview"
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-600"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="bg-gray-700 rounded-lg p-5 border border-gray-600">
        <h4 className="font-semibold text-gray-100 mb-3">Review Your Information</h4>
        <div className="space-y-2 text-sm text-gray-300">
          <p><span className="font-medium text-gray-200">Name:</span> {formData.firstName} {formData.lastName}</p>
          <p><span className="font-medium text-gray-200">Username:</span> {formData.username}</p>
          <p><span className="font-medium text-gray-200">Email:</span> {formData.email}</p>
          <p><span className="font-medium text-gray-200">Gender:</span> {formData.gender}</p>
          <p><span className="font-medium text-gray-200">Birthday:</span> {formData.birthday}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center p-4 items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="w-full max-w-md px-4">
        <div className="card bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-blue-500">
          <div className="p-8">
            <div className="flex justify-center ">
              <div className="flex items-center gap-2">
                <Code className="text-blue-500" size={28} />
                <h1 className="text-3xl font-bold text-blue-400">DevTinder</h1>
                <CodeXml className="text-blue-500" size={28} />
              </div>
            </div>

            <h2 className="text-pink-400 text-sm italic mt-2 mb-4 text-center">
              {"</>"} Where your heart finds a merge request 💖
            </h2>

            {renderProgressBar()}
            
            <div>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              
              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>
                )}
                
                <div className="flex-1"></div>
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSignup}
                    disabled={isLoading}
                    className="flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
                  >
                    {isLoading ? (
                      "Creating Account..."
                    ) : (
                      <>
                        <UserPlus size={16} className="mr-2" />
                        Create Account
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-600"
                >
                  Facebook
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-pink-400 hover:text-pink-300"
                >
                  Sign in to DevTinder
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiStepSignup;