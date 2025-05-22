// Main MultiStepSignup Component
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SignupData } from '../types/Types';
import { DevTinderHeader } from './multipleSignup/DevTinderHeader';
import { ProgressBar } from './multipleSignup/ProgressBar';
import { Step1BasicInfo } from './multipleSignup/Step1BasicInfo';
import { Step2PersonalDetails } from './multipleSignup/Step2PersonalDetails';
import { Step3ProfilePhoto } from './multipleSignup/ProfilePhoto';
import { NavigationButtons } from './multipleSignup/Navigation';
import { SocialLogin } from './multipleSignup/SocialLogin';
import { isAuthenticateUser, signup } from '../services/AuthService';
import { calculateAge } from '../lib/calculateAge';
import { formatGender } from '../lib/formatGender';


const MultiStepSignup2: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SignupData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    photoUrl: '',
    about:"",
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
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<SignupData> = {};
    
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.age) newErrors.age = 'DOB is required';

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
    const ageNumber = calculateAge(formData.age)
 console.log("✅ handleSignup triggered", formData)
    // Simulate API call
   try {
      const result = await signup({
        firstName: formData.firstName,
      lastName: formData.lastName,
      emailId: formData.email, // map email to 
      password: formData.password,
      gender: formatGender(formData.gender), 
      age: ageNumber.toString(),
      about: formData.about || 'not provided',
      photoUrl: formData.photoUrl || 'www.img.com'
      })
      
      // skills: formData.skills

    if (result.success) {
      alert(result.message);
      navigate('/login');
    } else {
      alert(result.message || 'Signup failed. Please try again.');
    }
   } catch (error) {
    
    console.error('Signup error:', error);
    alert('An error occurred. Please try again.');
   }finally {
    setIsLoading(false);
  }
  };

  const stepProps = { formData, errors, onChange: handleInputChange };

     useEffect(() => {
    if (isAuthenticateUser()) {
     navigate("/feed", { replace: true });
    }
  }, []);
  return (
    <div className="flex justify-center  items-center w-full min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-5 ">
      <div className="w-full max-w-md px-4">
        <div className="card bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-blue-500">
          <div className="p-8">
            <DevTinderHeader />
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            
            <div>
              {currentStep === 1 && <Step1BasicInfo {...stepProps} />}
              {currentStep === 2 && <Step2PersonalDetails {...stepProps} />}
              {currentStep === 3 && <Step3ProfilePhoto {...stepProps} />}
              
              <NavigationButtons
                currentStep={currentStep}
                totalSteps={totalSteps}
                isLoading={isLoading}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onSignup={handleSignup}
              />
            </div>

            <SocialLogin />

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

export default MultiStepSignup2;