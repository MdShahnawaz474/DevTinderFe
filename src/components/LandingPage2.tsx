import { useState, useEffect, type JSX } from "react";
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
  Sparkles,
  Coffee,
  Terminal,
  Rocket,
  Play,
} from "lucide-react";

// Type definitions
interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  tech: string[];
}

interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
  color: string;
}

const DevTinderLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate code snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const codeSnippets: CodeSnippet[] = [
    {
      language: "JavaScript",
      filename: "love.js",
      code: `// Created by MD Shahnawaz
const findLove = (developer) => {
  if (developer.bugs.length === 0) {
    return "❌ Too perfect, red flag!";
  }
  return developer.coffee > 3 ? "💖 Soulmate!" : "🤷‍♂️ Maybe";
};

const relationshipStatus = "It's complicated... like my code";`,
      color: "text-yellow-400",
    },
    {
      language: "Python",
      filename: "romance.py",
      code: `# Author: MD Shahnawaz
def calculate_love(me, crush):
    if crush.uses_semicolons_in_python:
        return 0  # Deal breaker
    
    if crush.indentation == "spaces":
        return 100  # True love ❤️
    
    return 50  # We can work on this

# TODO: Fix my love life`,
      color: "text-green-400",
    },
    {
      language: "TypeScript",
      filename: "dating.ts",
      code: `// Developed by MD Shahnawaz
interface Crush {
  name: string;
  usesTypeScript: boolean;
  debugsInProduction: boolean;
}

const askOnDate = (crush: Crush): string => {
  if (crush.debugsInProduction) {
    return "🚨 ABORT MISSION!";
  }
  return "Hey, want to pair program? 😉";
};`,
      color: "text-blue-400",
    },
    {
      language: "React",
      filename: "LoveComponent.jsx",
      code: `// Built with ❤️ by MD Shahnawaz
const MyLoveLife = () => {
  const [heartBroken, setHeartBroken] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(0);

  useEffect(() => {
    if (coffeeCount > 5) {
      setHeartBroken(false); // Coffee fixes everything
    }
  }, [coffeeCount]);

  return <div>Still loading... 💔</div>;
};`,
      color: "text-cyan-400",
    },
    {
      language: "Go",
      filename: "main.go",
      code: `// Creator: MD Shahnawaz
package main

func FindLove() (string, error) {
    if time.Now().Hour() < 9 {
        return "", errors.New("too early, need coffee first ☕")
    }
    
    if rand.Float64() > 0.5 {
        return "💖 Found love in a hopeless place (Stack Overflow)", nil
    }
    
    return "404: Love not found 😢", nil
}`,
      color: "text-blue-300",
    },
    {
      language: "CSS",
      filename: "style.css",
      code: `/* Designed by MD Shahnawaz */
.my-love-life {
  display: none; /* Currently hidden 😭 */
}

.crush {
  position: absolute;
  top: 0;
  right: 0;
  left: me; /* Always out of reach */
}

.heart {
  animation: broken 1s infinite;
}

/* TODO: Fix this mess */`,
      color: "text-pink-400",
    },
  ];

  const features: Feature[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Compatibility",
      description:
        "Match with developers who share your tech stack and coding philosophy",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Smart Matching",
      description:
        "Our algorithm finds your perfect coding companion based on skills and interests",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Developer Community",
      description:
        "Join a vibrant community of passionate developers looking for meaningful connections",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "TechCorp",
      content:
        "Found my coding soulmate through DevTinder! We're now building amazing projects together and our love story is written in beautiful code. 💖",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      tech: ["React", "Node.js", "TypeScript"],
    },
    {
      name: "Alex Rodriguez",
      role: "Frontend Engineer",
      company: "StartupXYZ",
      content:
        "The skill-based matching is incredible. Met developers who complement my abilities perfectly. Our commits are synchronized! 🚀",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      tech: ["Vue.js", "Python", "AWS"],
    },
    {
      name: "Maya Patel",
      role: "Backend Developer",
      company: "DevInnovate",
      content:
        "More than just dating - found collaborators, mentors, and lifelong friends here! Our relationship has zero bugs! 🐛❌",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      tech: ["Go", "Docker", "MongoDB"],
    },
  ];

  //   const additionalCodeExamples = [
  //     {
  //       title: "API Endpoint",
  //       language: "Node.js",
  //       code: `// DevTinder API - By MD Shahnawaz
  // app.post('/api/match', async (req, res) => {
  //   const { developerId } = req.body;
  //   const matches = await findCompatibleDevs(developerId);

  //   res.json({
  //     success: true,
  //     matches: matches.filter(dev => dev.loveScore > 85),
  //     message: "💖 Love connections found!",
  //     creator: "MD Shahnawaz"
  //   });
  // });`
  //     },
  //     {
  //       title: "Database Schema",
  //       language: "SQL",
  //       code: `-- DevTinder Database Schema
  // -- Designed by MD Shahnawaz
  // CREATE TABLE developers (
  //   id SERIAL PRIMARY KEY,
  //   name VARCHAR(100) NOT NULL,
  //   github_username VARCHAR(50),
  //   favorite_language VARCHAR(30),
  //   looking_for_love BOOLEAN DEFAULT true,
  //   heart_emoji VARCHAR(10) DEFAULT '💖',
  //   created_by VARCHAR(50) DEFAULT 'MD Shahnawaz'
  // );`
  //     },
  //     {
  //       title: "Machine Learning Model",
  //       language: "Python",
  //       code: `# Love Prediction Model - MD Shahnawaz
  // import tensorflow as tf
  // from sklearn.model_selection import train_test_split

  // class LovePredictor:
  //     def __init__(self):
  //         self.model = self.build_love_model()
  //         self.creator = "MD Shahnawaz"

  //     def predict_compatibility(self, dev1_features, dev2_features):
  //         combined_features = np.concatenate([dev1_features, dev2_features])
  //         love_score = self.model.predict([combined_features])
  //         return {
  //             "love_probability": float(love_score[0]),
  //             "creator": self.creator
  //         }`
  //     }
  //   ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <Code className="text-blue-400 w-16 h-16" />
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DevTinder
              </h1>
              <CodeXml className="text-blue-400 w-16 h-16" />
            </div>

            {/* Tagline */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <Terminal className="text-green-400 w-6 h-6" />
              <p className="text-2xl md:text-3xl text-pink-400 italic font-mono">
                Where your heart finds a merge request 💖
              </p>
              <Coffee className="text-yellow-600 w-6 h-6" />
            </div>

            {/* Rotating Code Editor */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-10 font-mono text-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  ~/DevTinder/{codeSnippets[currentCodeSnippet].filename}
                </span>
                <span
                  className={`ml-auto text-xs px-2 py-1 rounded ${codeSnippets[currentCodeSnippet].color} bg-gray-800`}
                >
                  {codeSnippets[currentCodeSnippet].language}
                </span>
              </div>
              <div className="text-left">
                <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  <code>{codeSnippets[currentCodeSnippet].code}</code>
                </pre>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Connect with fellow developers, find your coding soulmate, and
              build beautiful relationships alongside beautiful code.
              <br />
              <span className="text-pink-400 italic">
                No bugs in love, only features! 🐛➡️✨
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 px-10 py-4 rounded-full text-xl font-bold hover:opacity-90 transition-opacity">
                <span className="flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  Start Your Love Story
                  <ArrowRight className="w-6 h-6" />
                </span>
              </button>

              <button className="border-2 border-blue-400 px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-400 hover:text-gray-900 transition-colors">
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  Watch Love Demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  count: "10K+",
                  label: "Active Developers",
                  icon: <Users className="w-6 h-6" />,
                  color: "text-blue-400",
                },
                {
                  count: "500+",
                  label: "Successful Matches",
                  icon: <Heart className="w-6 h-6" />,
                  color: "text-pink-400",
                },
                {
                  count: "50+",
                  label: "Tech Stacks",
                  icon: <Code className="w-6 h-6" />,
                  color: "text-purple-400",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-colors"
                >
                  <div className="flex justify-center mb-3">
                    <div className={stat.color}>{stat.icon}</div>
                  </div>
                  <div className={`text-4xl font-black ${stat.color} mb-3`}>
                    {stat.count}
                  </div>
                  <div className="text-gray-300 text-lg font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                DevTinder
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built by developers, for developers. Experience love through code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-800/60 backdrop-blur-sm border-2 rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                  activeFeature === index
                    ? "border-blue-400"
                    : "border-gray-700 hover:border-purple-400"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${feature.color} text-white`
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

      {/* Code Examples Section */}
      {/* Interactive Features Showcase */}
      <section className="py-20 px-4 bg-gray-500/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Experience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Love
              </span>{" "}
              Features
            </h2>
            <p className="text-xl text-gray-400">
              Interactive tools designed for developer hearts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Code Compatibility Checker */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-400 transition-all hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Code Compatibility</h3>
                <p className="text-gray-400 mb-4">
                  Check if your coding styles are meant to be together
                </p>
                <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400 mb-4">
                  if (you.style === their.style) {`{`}
                  <br />
                  &nbsp;&nbsp;return "💖 Perfect Match!";
                  <br />
                  {`}`}
                </div>
                <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-sm transition-colors">
                  Test Compatibility
                </button>
              </div>
            </div>

            {/* Live Chat Preview */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-all hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Love Chat</h3>
                <p className="text-gray-400 mb-4">
                  Send code snippets with heart reactions
                </p>
                <div className="bg-gray-800 rounded-lg p-3 text-left space-y-2 mb-4">
                  <div className="text-blue-400 text-sm">
                    Sarah: Check out my React hook! 💕
                  </div>
                  <div className="text-pink-400 text-sm">
                    You: Love your clean code! 😍
                  </div>
                  <div className="text-gray-500 text-xs">💖 +5 Love Points</div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm transition-colors">
                  Start Chatting
                </button>
              </div>
            </div>

            {/* Pair Programming */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-all hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pair Programming</h3>
                <p className="text-gray-400 mb-4">
                  Code together in real-time with your match
                </p>
                <div className="bg-gray-800 rounded-lg p-3 font-mono text-xs text-gray-300 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400">Alex is typing...</span>
                  </div>
                  <div className="text-yellow-400">const love = true;</div>
                </div>
                <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full text-sm transition-colors">
                  Start Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-800/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Love Workflow
            </h2>
            <p className="text-xl text-gray-400">
              Simple steps to find your perfect coding companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Profile",
                desc: "Showcase your skills, projects, and what you're looking for",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Smart Matching",
                desc: "Our AI finds compatible developers based on your preferences",
                icon: <Zap className="w-8 h-8" />,
                color: "from-yellow-500 to-orange-500",
              },
              {
                step: "03",
                title: "Connect & Chat",
                desc: "Start conversations about code, projects, and shared interests",
                icon: <Heart className="w-8 h-8" />,
                color: "from-pink-500 to-rose-500",
              },
              {
                step: "04",
                title: "Build Together",
                desc: "Collaborate on projects, learn together, and grow your relationship",
                icon: <Code className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-900 border-2 border-pink-400 text-pink-400 text-sm font-bold px-2 py-1 rounded-full">
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

      {/* Tech Stack Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Built with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                Modern Tech
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Powered by the technologies you love
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              { name: "React", color: "text-blue-400", icon: "⚛️" },
              { name: "Node.js", color: "text-green-400", icon: "🟢" },
              { name: "MongoDB", color: "text-green-500", icon: "🍃" },
              { name: "TypeScript", color: "text-blue-500", icon: "📘" },
              { name: "AI/ML", color: "text-purple-400", icon: "🤖" },
              { name: "WebSocket", color: "text-yellow-400", icon: "⚡" },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto bg-gray-800/60 border border-gray-700 rounded-xl flex items-center justify-center text-4xl hover:border-purple-400 hover:scale-105 transition-all">
                  {tech.icon}
                </div>
                <h3 className={`mt-3 text-lg font-bold ${tech.color}`}>
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gray-800/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Love Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              Real developers, real connections, real love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3 border-2 border-gray-600"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {testimonial.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-500/30 text-blue-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 italic mb-4">
                  "{testimonial.content}"
                </p>

                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Debug Your <br />
            <span className="text-yellow-300">Love Life?</span>
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who have found their perfect merge
            partner
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-purple-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
              <span className="flex items-center gap-3 justify-center">
                <Sparkles className="w-6 h-6" />
                Join DevTinder Free
                <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
              </span>
            </button>

            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-white hover:text-purple-700 transition-colors">
              <span className="flex items-center gap-3">
                <Terminal className="w-6 h-6" />
                View Documentation
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "💕", stat: "99.9%", label: "Love Success Rate" },
              { icon: "⚡", stat: "0ms", label: "Heart Response Time" },
              { icon: "🚀", stat: "24/7", label: "Uptime Guarantee" },
              { icon: "🔒", stat: "SSL", label: "Secure Hearts" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-yellow-300 mb-1">
                  {item.stat}
                </div>
                <div className="opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400 w-6 h-6" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  DevTinder
                </span>
                <Heart className="text-pink-400 w-5 h-5" fill="currentColor" />
              </div>
              <p className="text-gray-400 mb-4">
                Connecting developers worldwide through shared passion for code
                and meaningful relationships.
              </p>

              {/* Creator Attribution Code Block */}
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4 mb-4 font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-gray-500">// Author Attribution</span>
                  <br />
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">creator</span> ={" "}
                  <span className="text-yellow-400">"MD Shahnawaz"</span>;<br />
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">project</span> ={" "}
                  <span className="text-yellow-400">"DevTinder"</span>;<br />
                  <span className="text-pink-400">console</span>.
                  <span className="text-blue-400">log</span>(
                  <span className="text-yellow-400">`Built with ❤️ by $</span>
                  <span className="text-white">{"{"}</span>
                  <span className="text-blue-400">creator</span>
                  <span className="text-white">{"}"}</span>
                  <span className="text-yellow-400">`</span>);
                </div>
              </div>

              <div className="flex gap-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-pink-400 cursor-pointer transition-colors">
                  Smart Matching
                </li>
                <li className="hover:text-blue-400 cursor-pointer transition-colors">
                  Skill-based Filters
                </li>
                <li className="hover:text-green-400 cursor-pointer transition-colors">
                  Project Collaboration
                </li>
                <li className="hover:text-purple-400 cursor-pointer transition-colors">
                  Developer Community
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
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

          {/* Enhanced Creator Section */}
          <div className="border-t border-gray-800 pt-12 text-center">
            {/* Enhanced Creator Section */}
            <div className="bg-gray-800/60 backdrop-blur-sm border-2 border-gray-700 rounded-2xl p-8 mb-8 font-mono text-lg max-w-2xl mx-auto shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-gray-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  ~/creator-info.js
                </span>
              </div>
              <div className="text-left space-y-2">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">creator</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-400">"MD Shahnawaz"</span>
                  <span className="text-white">;</span>
                </div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">passion</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-green-400">
                    "connecting hearts through code"
                  </span>
                  <span className="text-white">;</span>
                </div>
                <div>
                  <span className="text-pink-400">console.log</span>
                  <span className="text-white">(</span>
                  <span className="text-yellow-400">{`\`Created with ❤️ by ${"MD Shahnawaz"}\``}</span>
                  <span className="text-white">);</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-lg">
              {" "}
              &copy; {new Date().getFullYear()} DevTinder. All rights reserved.
            </p>
            <p className="mt-4 text-lg">
              Created and Designed with{" "}
              <Heart
                className="inline w-5 h-5 text-red-400 animate-pulse"
                fill="currentColor"
              />{" "}
              by{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-black text-2xl">
                MD Shahnawaz
              </span>
              <br />
              <span className="text-gray-500 font-mono text-base">
                // Committed to spreading love through code 💻💕
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 w-16 h-16 rounded-full shadow-xl hover:shadow-pink-500/50 transition-all hover:scale-110 flex items-center justify-center">
          <Heart className="w-8 h-8 text-white" fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default DevTinderLanding;
