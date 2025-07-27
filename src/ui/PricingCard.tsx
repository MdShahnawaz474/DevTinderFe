import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/AuthService";
export interface PlanData {
  amount: number;
  planName: string;
  planType: "monthly" | "yearly";
}
declare global {
  interface Window {
    Razorpay: any;
  }
}
const PricingSection = () => {
  // State to toggle between Monthly and Yearly pricing
  const [isMonthly, setIsMonthly] = useState(true);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // Function to toggle pricing state
  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  // Enhanced pricing plans with better features
  const plans = [
    {
      name: "Silver",
      monthlyPrice: "₹1000",
      yearlyPrice: "₹10,000",
      monthlyLabel: "/month",
      yearlyLabel: "/year",
      features: [
        "Send Up to 100 Connection Requests/Day",
        "20 Minutes of Chat Time/Day",
        "Limited Profile Boosts (1 boost/week )",
        "Customer Support 24*7",
      ],
      gradient: "from-slate-600 via-slate-700 to-slate-800",
      buttonGradient: "from-gray-500 to-slate-600",
      popular: false,
    },
    {
      name: "Gold",
      monthlyPrice: "₹2000",
      yearlyPrice: "₹20,000",
      monthlyLabel: "/month",
      yearlyLabel: "/year",
      features: [
        "Advanced analytics",
        "Send Up to 200 Connection Requests/Day",
        "50 Minutes of Chat Time/Day",
        "Advanced Profile Insights",
        "Weekly Profile Boosts (2x/week)",
        "Customer Support 24*7",
      ],
      gradient: "from-blue-950 via-blue-700 to-purple-700",
      buttonGradient: "from-blue-500 to-purple-600",
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: "₹4000",
      yearlyPrice: "₹30000",
      monthlyLabel: "/month",
      yearlyLabel: "/year",
      features: [
        "Premium analytics",
        " Unlimited Connection Requests",
        "Unlimited Chat Time",
        "Daily Profile Boosts",
        "Video Call Integration (up to 3 calls/day)",
        "Team Networking – Create groups for hackathons or collabs",
        "Pro Badge – Appear as a verified premium developer",
      ],
      gradient: "from-purple-600 via-pink-600 to-purple-900",
      buttonGradient: "from-purple-500 to-pink-500",
      popular: true,
    },
  ];

  const handleBuyPlan = async (planName: any) => {
    setPaymentLoading(planName);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const selectedPlan = plans.find(
      (p) => p.name.toLowerCase() === planName.toLowerCase()
    );
    if (!selectedPlan) {
      throw new Error("Plan not found");
    }
    const amount = isMonthly
      ? selectedPlan.monthlyPrice
      : selectedPlan.yearlyPrice;

    console.log(`Processing payment for ${planName} plan: ₹${amount}`);

    try {
      const paymentOrder = await axios.post(
        `${BASE_URL}/payment/create`,
        { membershipTypes: planName },
        { withCredentials: true }
      );

      const { amount, keyId, currency, notes, orderId } = paymentOrder.data;
      console.log(keyId);
      
      const options = {
        key: keyId,
        amount,
        currency,
        name: "devTinder",
        description: "connect to other developers",
        order_id: orderId,
        prefill: {
          name: notes.firstName + notes.lastName,
          emaild: notes.emailId,
          membershipTypes: notes.membershipTypes,
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
      // alert(`Payment initiated for ${planName} plan - ₹${amount}`);
    } catch (error: any) {}
  };

  // Function to generate star icons based on count
  const getStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <StarIcon key={i} />);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 p-8">
      {/* Header */}
      <div className="text-center mb-8 mt-3">
        <h2
          className="text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-400 to-cyan-400
 mb-2 "
        >
          DevTinder Premium
        </h2>
        <p className="text-gray-400 text-lg">
          Choose the perfect plan for your needs
        </p>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-8">
        <div className="relative  bg-gray-800 rounded-3xl p-1 ">
          <div
            className={`absolute top-1 bottom-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500  transition-transform duration-300 rounded-2xl ${
              isMonthly ? "translate-x-0" : "translate-x-24"
            }`}
          />
          <button
            className={`relative z-10 px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              isMonthly ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            onClick={togglePricing}
          >
            Monthly
          </button>
          <button
            className={`relative z-10 px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              !isMonthly ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            onClick={togglePricing}
          >
            Yearly
          </button>
        </div>
        {!isMonthly && (
          <div className="ml-4 flex items-center">
            <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              Save 20%
            </span>
          </div>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => <LoadingSkeleton key={index} />)
          : plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${
                  plan.popular ? "lg:scale-105 lg:-translate-y-4" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${plan.gradient} p-0.5 group-hover:scale-105 transition-all duration-300 shadow-2xl  `}
                >
                  {/* Inner Card */}
                  {/* {// bg-gradient-to-b from-gray-900 to-blue-950} */}

                  <div className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-gray-800 rounded-2xl p-8 h-full backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className={`text-xl font-bold  ${
                          plan.name === "Gold"
                            ? "text-amber-300"
                            : plan.name === "Pro"
                            ? "text-red-400"
                            : "text-white"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex space-x-1">
                        {getStars(
                          plan.name === "Silver"
                            ? 2
                            : plan.name === "Gold"
                            ? 3
                            : 4
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">
                          {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-400 text-lg ml-1">
                          {isMonthly ? plan.monthlyLabel : plan.yearlyLabel}
                        </span>
                      </div>
                      {!isMonthly && (
                        <p className="text-green-400 text-sm mt-1">
                          Save $
                          {(
                            parseFloat(plan.monthlyPrice.replace("$", "")) *
                              12 -
                            parseFloat(plan.yearlyPrice.replace("$", ""))
                          ).toFixed(0)}{" "}
                          annually
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-300"
                        >
                          <div className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3">
                            <CheckIcon />
                          </div>
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={() => handleBuyPlan(plan.name)}
                      className={`w-full py-2 px-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r ${plan.buttonGradient} hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0`}
                    >
                      {" "}
                      {paymentLoading === plan.name ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        `Get Started with ${plan.name}`
                      )}
                    </button>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                  />
                </div>
              </div>
            ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-400 mb-4">Need a custom solution?</p>
        <button className="text-purple-400 hover:text-purple-300 font-medium underline decoration-purple-400/50 hover:decoration-purple-300 transition-colors">
          Contact our sales team
        </button>
      </div>
    </div>
  );
};

export default PricingSection;

const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      className="fill-current text-yellow-400"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      className="fill-current text-green-400"
    >
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
    </svg>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="relative">
      <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse rounded-2xl p-8">
        <div className="space-y-4">
          <div className="h-6 bg-gray-600 rounded w-1/2"></div>
          <div className="h-8 bg-gray-600 rounded w-1/3"></div>
          <div className="space-y-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-4 bg-gray-600 rounded w-full"></div>
              ))}
          </div>
          <div className="h-12 bg-gray-600 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};
