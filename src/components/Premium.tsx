import { useEffect } from "react";
import PricingSection from "../ui/PricingCard";
import { getCookie } from "../services/CookieService";
import { isAuthenticateUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Premium = ()=>{
    const navigate = useNavigate();
     useEffect(() => {
      const token = getCookie("token");
      if (!token || !isAuthenticateUser()) {
        console.log("Redirecting to login...");
        navigate("/login");
      }
    }, []);
    return (
    <PricingSection/>
    )
}

export default Premium;