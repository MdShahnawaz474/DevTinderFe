import { useState, useEffect } from "react";
import {
  Code,
  CodeXml,
  Heart,
  Users,
  Zap,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const DevTinderLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Compatibility",
      description:
        "Match with developers who share your tech stack and coding philosophy",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Smart Matching",
      description:
        "Our algorithm finds your perfect coding companion based on skills and interests",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Developer Community",
      description:
        "Join a vibrant community of passionate developers looking for meaningful connections",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "TechCorp",
      content:
        "Found my coding soulmate through DevTinder! We're now building amazing projects together.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Alex Rodriguez",
      role: "Frontend Engineer",
      company: "StartupXYZ",
      content:
        "The skill-based matching is incredible. Met developers who complement my abilities perfectly.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Maya Patel",
      role: "Backend Developer",
      company: "DevInnovate",
      content:
        "More than just dating - found collaborators, mentors, and lifelong friends here!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-500/30">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="text-blue-400 w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              DevTinder
            </span>
            <CodeXml className="text-blue-400 w-8 h-8" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-blue-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-400 transition-colors"
            >
              Reviews
            </a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 hover:text-blue-400">
                Features
              </a>
              <a
                href="#how-it-works"
                className="block py-2 hover:text-blue-400"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="block py-2 hover:text-blue-400"
              >
                Reviews
              </a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Animated Logo */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="animate-pulse">
                <Code className="text-blue-400 w-16 h-16" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                DevTinder
              </h1>
              <div className="animate-pulse">
                <CodeXml className="text-blue-400 w-16 h-16" />
              </div>
            </div>

            <p className="text-2xl md:text-3xl text-pink-400 italic mb-4 animate-bounce">
              {"</>"} Where your heart finds a merge request 💖
            </p>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Connect with fellow developers, find your coding soulmate, and
              build beautiful relationships alongside beautiful code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all transform hover:scale-105">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  10K+
                </div>
                <div className="text-gray-400">Active Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  500+
                </div>
                <div className="text-gray-400">Successful Matches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  50+
                </div>
                <div className="text-gray-400">Tech Stacks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                DevTinder
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We understand developers. Our platform is built by developers, for
              developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 text-center transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                  activeFeature === index
                    ? "border-blue-400 shadow-lg shadow-blue-400/20"
                    : "border-gray-700 hover:border-purple-400"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-colors ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">
              Simple steps to find your coding companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Profile",
                desc: "Showcase your skills, projects, and what you're looking for",
                icon: <Users className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Smart Matching",
                desc: "Our algorithm finds compatible developers based on your preferences",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Connect & Chat",
                desc: "Start conversations about code, projects, and shared interests",
                icon: <Heart className="w-8 h-8" />,
              },
              {
                step: "04",
                title: "Build Together",
                desc: "Collaborate on projects, learn together, and grow your relationship",
                icon: <Code className="w-8 h-8" />,
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Real developers, real connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Find Your <br />
            <span className="text-yellow-300">Coding Soulmate?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have found meaningful connections
            through DevTinder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center">
              <Sparkles className="w-5 h-5" />
              Join DevTinder Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-purple-700 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-blue-400 w-6 h-6" />
                <span className="text-xl font-bold text-blue-400">
                  DevTinder
                </span>
                <CodeXml className="text-blue-400 w-6 h-6" />
              </div>
              <p className="text-gray-400 mb-4">
                Connecting developers worldwide through shared passion for code
                and meaningful relationships.
              </p>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Smart Matching
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Skill-based Filters
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Project Collaboration
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Developer Community
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Careers
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Blog
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Press
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Help Center
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Safety
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Privacy Policy
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Terms of Service
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} DevTinder. All rights reserved.
            </p>
            <p className="mt-2 text-sm">
              Created and Designed with ❤️ by{" "}
              <span className="text-blue-400 font-semibold">MD Shahnawaz</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevTinderLanding;
