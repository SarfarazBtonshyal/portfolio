
// @ts-nocheck
"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaGraduationCap, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, ReactNode, ComponentProps } from "react";
import Logo from "./components/Logo";
import NavLink from "./components/NavLink";
import { useInView } from "framer-motion";

const coreSkills = [
  { 
    name: "Frontend", 
    description: "HTML5, CSS3, JavaScript, React.js, Tailwind CSS",
    color: "from-purple-500 to-indigo-600"
  },
  { 
    name: "Backend & Database", 
    description: "Node.js, SQL, PostgreSQL",
    color: "from-green-500 to-emerald-600"
  },
  { 
    name: "Tools", 
    description: "Git, GitHub, VS Code",
    color: "from-blue-400 to-cyan-500"
  }
];

const techStack = [
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "Arduino", icon: "/icons/cpp.svg" },
  { name: "IoT", icon: "/icons/data.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];


const education = [
  {
    type: "education",
    icon: <FaGraduationCap className="text-blue-500" />,
    title: "Bachelor of Computer Science and Engineering - IoT Specialization",
    org: "Presidency University, Bengaluru",
    date: "2022 - 2026 (Expected)",
    desc: "Studying Computer Science with focus on Internet of Things (IoT) and web development technologies."
  },
  {
    type: "education",
    icon: <FaGraduationCap className="text-green-500" />,
    title: "Pre-University Course (PUC)",
    org: "Shaheen PU College, Bengaluru",
    date: "2020 - 2022",
    desc: "Completed Pre-University Course as part of academic progression."
  },
  {
    type: "education",
    icon: <FaGraduationCap className="text-purple-500" />,
    title: "Secondary Education",
    org: "RT Nagar Public School, Bengaluru",
    date: "Completed",
    desc: "Completed secondary education foundation."
  }
];

const projects = [
  {
    name: "To-Do Web App",
    description: "A responsive task management application built with React.js that allows users to add, edit, delete, and mark tasks as complete. Features include local storage persistence, task filtering, and a clean, intuitive UI.",
    link: "https://github.com/SarfarazBtonshyal/To-Do-Web-App",
    tags: ["React.js", "JavaScript", "CSS", "Local Storage"],
  },
  {
    name: "Basic Calculator Web App",
    description: "A clean and functional calculator web application built with vanilla JavaScript, HTML, and CSS. Performs basic arithmetic operations with a responsive design that works on all device sizes.",
    link: "https://github.com/SarfarazBtonshyal/Basic-calculator-web-app",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    name: "Arduino-based Solar Power Tracking Project",
    description: "Developed a comprehensive solar power tracking system using Arduino. Created energy audit reports, ensured regulatory compliance, and developed detailed project plans with scope, budget, timeline, and resource allocation.",
    link: "#",
    tags: ["Arduino", "IoT", "Solar Energy", "Project Management"],
  },
  {
    name: "Stock Price Prediction",
    description: "A project for predicting stock prices using machine learning techniques.",
    link: "https://github.com/SarfarazBtonshyal/Stock_price_prediction-",
    tags: ["ML", "Finance", "Python"],
  },
];

// Section animation wrapper
type SectionFadeInProps = React.HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
};

function SectionFadeIn({ children, className = "", ...props }: SectionFadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 text-gray-900 font-sans relative overflow-hidden">
      {/* Clean Light Theme Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/20 via-transparent to-cyan-50/15"></div>
        
        
        {/* Soft floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-purple-100/30 to-pink-100/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-100/25 to-blue-100/20 rounded-full blur-xl"></div>
        
        
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#e5e7eb12_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        
        
        
        
        
        
        
      </div>
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Sarfaraz</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="#hero" color="from-blue-600 to-indigo-600">Home</NavLink>
              <NavLink href="#about" color="from-cyan-600 to-teal-600">About</NavLink>
              <NavLink href="#skills" color="from-violet-600 to-purple-600">Skills</NavLink>
              <NavLink href="#projects" color="from-indigo-600 to-blue-600">Projects</NavLink>
              <NavLink href="#certifications" color="from-amber-600 to-orange-600">Certifications</NavLink>
              <a 
                href="#contact" 
                className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Spectacular Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          
          {/* Floating geometric shapes with stunning effects */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 via-cyan-400/30 to-indigo-400/20 rounded-full filter blur-2xl animate-float group-hover:scale-150 transition-all duration-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-tl from-purple-400/25 via-pink-400/30 to-rose-400/20 rounded-full filter blur-3xl animate-float group-hover:scale-125 transition-all duration-2000" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-gradient-to-br from-emerald-400/20 via-teal-400/25 to-cyan-400/20 rounded-full filter blur-2xl animate-float group-hover:scale-140 transition-all duration-2000" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-tl from-amber-400/25 via-orange-400/30 to-red-400/20 rounded-full filter blur-2xl animate-float group-hover:scale-130 transition-all duration-2000" style={{animationDelay: '6s'}}></div>
          
          {/* Animated particle system */}
          <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-blue-500/60 rounded-full animate-tech-float hover:scale-300 hover:bg-blue-400/80 transition-all duration-500 cursor-pointer" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-purple-500/70 rounded-full animate-tech-float hover:scale-400 hover:bg-purple-400/90 transition-all duration-500 cursor-pointer" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-cyan-500/80 rounded-full animate-tech-float hover:scale-500 hover:bg-cyan-400/100 transition-all duration-500 cursor-pointer" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-3/5 right-1/6 w-2.5 h-2.5 bg-indigo-500/50 rounded-full animate-tech-float hover:scale-250 hover:bg-indigo-400/70 transition-all duration-500 cursor-pointer" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/5 left-1/4 w-1.5 h-1.5 bg-pink-500/60 rounded-full animate-tech-float hover:scale-350 hover:bg-pink-400/80 transition-all duration-500 cursor-pointer" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-emerald-500/70 rounded-full animate-tech-float hover:scale-400 hover:bg-emerald-400/90 transition-all duration-500 cursor-pointer" style={{animationDelay: '6s'}}></div>
          <div className="absolute bottom-2/5 left-1/6 w-2 h-2 bg-amber-500/55 rounded-full animate-tech-float hover:scale-300 hover:bg-amber-400/75 transition-all duration-500 cursor-pointer" style={{animationDelay: '7s'}}></div>
          <div className="absolute bottom-3/5 right-1/4 w-1.5 h-1.5 bg-rose-500/65 rounded-full animate-tech-float hover:scale-350 hover:bg-rose-400/85 transition-all duration-500 cursor-pointer" style={{animationDelay: '8s'}}></div>
          
          {/* Mesmerizing wave patterns */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-circuit-pulse"></div>
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent animate-circuit-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent animate-circuit-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-300/35 to-transparent animate-circuit-pulse" style={{animationDelay: '3s'}}></div>
          
          {/* Stunning geometric overlays */}
          <div className="absolute top-1/4 left-1/2 w-24 h-24 border-2 border-blue-300/30 rounded-lg rotate-45 animate-tech-float hover:rotate-90 hover:scale-125 transition-all duration-1000 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-blue-400/40 rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/2 w-20 h-20 border-2 border-purple-300/30 rounded-full animate-tech-float hover:scale-150 hover:rotate-180 transition-all duration-1000 cursor-pointer" style={{animationDelay: '2s'}}>
            <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-purple-400/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-6 border border-purple-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          {/* Dynamic code rain effect */}
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent animate-data-flow"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-300/25 to-transparent animate-data-flow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent animate-data-flow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent animate-data-flow" style={{animationDelay: '3s'}}></div>
          
          {/* Floating tech symbols */}
          <div className="absolute top-1/6 left-1/3 text-blue-400/20 text-6xl font-mono animate-code-glow hover:text-blue-500/40 hover:scale-150 transition-all duration-500 cursor-pointer" style={{animationDelay: '2s'}}>&lt;/&gt;</div>
          <div className="absolute top-1/3 right-1/6 text-purple-400/25 text-4xl font-mono animate-code-glow hover:text-purple-500/45 hover:scale-150 transition-all duration-500 cursor-pointer" style={{animationDelay: '4s'}}>{ }</div>
          <div className="absolute bottom-1/3 left-1/6 text-cyan-400/20 text-5xl font-mono animate-code-glow hover:text-cyan-500/40 hover:scale-150 transition-all duration-500 cursor-pointer" style={{animationDelay: '6s'}}>();</div>
          <div className="absolute bottom-1/6 right-1/3 text-indigo-400/25 text-3xl font-mono animate-code-glow hover:text-indigo-500/45 hover:scale-150 transition-all duration-500 cursor-pointer" style={{animationDelay: '8s'}}>[]</div>
          
          {/* Spectacular glow orbs */}
          <div className="absolute top-1/5 left-1/5 w-16 h-16 bg-blue-300/15 rounded-full filter blur-2xl animate-pulse hover:scale-200 transition-all duration-1000 cursor-pointer"></div>
          <div className="absolute top-2/5 right-1/5 w-20 h-20 bg-purple-300/20 rounded-full filter blur-3xl animate-pulse hover:scale-150 transition-all duration-1000 cursor-pointer" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/5 left-2/5 w-14 h-14 bg-cyan-300/18 rounded-full filter blur-2xl animate-pulse hover:scale-180 transition-all duration-1000 cursor-pointer" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-2/5 right-2/5 w-18 h-18 bg-indigo-300/16 rounded-full filter blur-3xl animate-pulse hover:scale-160 transition-all duration-1000 cursor-pointer" style={{animationDelay: '3s'}}></div>
          
          {/* Mesmerizing overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/20 via-transparent to-indigo-50/25 animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.p 
                className="text-lg md:text-xl font-medium text-blue-600 mb-4 inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hi, my name is
              </motion.p>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Sarfaraz B Tonshyal
              </motion.h1>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I build things for the web.
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I'm a passionate Full Stack Developer specializing in modern web technologies. 
                I create beautiful, responsive, and user-friendly applications that make an impact.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <a 
                  href="#projects" 
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group"
                >
                  <span>View My Work</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 bg-transparent border-2 border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-12 flex justify-center lg:justify-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <a 
                  href="https://github.com/SarfarazBtonshyal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/sarfaraz-btonshyal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Visual Element */}
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-3xl transform rotate-6 blur-2xl -z-10"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-2xl">
                  <div className="flex space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="font-mono text-sm text-gray-700 space-y-4">
                    <div className="flex items-start">
                      <span className="text-purple-600 mr-2">const</span>
                      <span className="text-blue-600">aboutMe</span>
                      <span className="text-gray-500 mx-1">=</span>
                      <span className="text-orange-500">&#123;</span>
                    </div>
                    
                    <div className="ml-6 space-y-2">
                      <div>
                        <span className="text-green-600">name</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-amber-600">'Sarfaraz B Tonshyal'</span>
                        <span className="text-gray-400">,</span>
                      </div>
                      <div>
                        <span className="text-green-600">role</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-amber-600">'Full Stack Developer'</span>
                        <span className="text-gray-400">,</span>
                      </div>
                      <div>
                        <span className="text-green-600">location</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-amber-600">'Bengaluru, India'</span>
                        <span className="text-gray-400">,</span>
                      </div>
                      <div>
                        <span className="text-green-600">expertise</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-amber-600">['React', 'Node.js', 'TypeScript']</span>
                      </div>
                    </div>
                    
                    <div className="text-orange-500">&#125;;</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full filter blur-xl animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-sm text-gray-600 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-blue-600 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <SectionFadeIn id="about" className="relative py-20 sm:py-24 lg:py-28">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-200/50 h-full shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who I Am</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. My journey in software development began with a deep curiosity about how things work, which led me to pursue a degree in Computer Science with a specialization in IoT.
                  </p>
                  <p>
                    I specialize in creating responsive, user-friendly web applications using modern technologies like React, Node.js, and TypeScript. I'm committed to writing clean, maintainable code and following best practices to deliver high-quality solutions.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I'm always excited to take on new challenges and work on meaningful projects that make a difference.
                  </p>
                </div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="/CV.pdf" 
                    download
                    className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 group"
                  >
                    <span>Download CV</span>
                    <FaDownload className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Column - Education */}
            <div className="space-y-8">
              {/* Education */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 mr-4">
                      <FaGraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Education</h3>
                  </div>
                  
                  <div className="space-y-8 relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/20 to-transparent"></div>
                    
                    {education.map((edu, index) => (
                      <div key={index} className="relative pl-10">
                        <div className="absolute left-5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-500/30"></div>
                        <div className="text-sm font-medium text-indigo-600 mb-1">{edu.date}</div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{edu.title}</h4>
                        <div className="text-sm text-gray-600 mb-2">{edu.org}</div>
                        <p className="text-gray-700 text-sm leading-relaxed">{edu.desc}</p>
                        
                        {index < education.length - 1 && (
                          <div className="absolute -bottom-4 left-5 w-0.5 h-4 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionFadeIn>

      {/* Skills Section */}
      <SectionFadeIn id="skills" className="mb-16 sm:mb-20 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-600">Core Skills</h2>
        <div className="space-y-6">
          {coreSkills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-1">{skill.name}</h3>
                  <p className="text-gray-700 text-sm">{skill.description}</p>
                </div>
              </div>
              {index < coreSkills.length - 1 && (
                <div className="h-px bg-gray-300 my-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </SectionFadeIn>


      {/* Projects Section */}
      <SectionFadeIn id="projects" className="mb-16 sm:mb-20 max-w-2xl sm:max-w-5xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-600 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 hover:scale-105 transition-transform group hover:bg-gray-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2 sm:mb-3 group-hover:underline">{project.name}</h3>
              <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">{project.description}</p>
              <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-4 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded text-xs font-semibold border border-blue-200">{tag}</span>
                ))}
              </div>
              <span className="text-blue-600 text-xs sm:text-sm font-medium">View on GitHub →</span>
            </motion.a>
          ))}
        </div>
      </SectionFadeIn>

{/* Certifications Section */}
      <SectionFadeIn id="certifications" className="mb-16 sm:mb-20 max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-600 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">Machine Learning and Data Science</h3>
            <p className="text-gray-700 mb-2">Udemy</p>
            <span className="text-blue-600 text-sm">Advanced ML and Data Science concepts</span>
          </div>
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">Deep Learning with TensorFlow</h3>
            <p className="text-gray-700 mb-2">IBM</p>
            <span className="text-blue-600 text-sm">Deep learning and neural networks</span>
          </div>
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">JavaScript (Basic) Certificate</h3>
            <p className="text-gray-700 mb-2">HackerRank</p>
            <span className="text-blue-600 text-sm">JavaScript fundamentals and problem solving</span>
          </div>
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 sm:p-8 hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">CSS (Basic) Certificate</h3>
            <p className="text-gray-700 mb-2">HackerRank</p>
            <span className="text-blue-600 text-sm">CSS styling and layout techniques</span>
          </div>
        </div>
      </SectionFadeIn>

      {/* Contact Section */}
      <SectionFadeIn id="contact" className="relative max-w-xs sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-4 mb-16 sm:mb-20 flex flex-col items-center">
        {/* Decorative SVG background */}
        <svg className="absolute -top-16 -right-16 w-64 h-64 opacity-20 blur-2xl pointer-events-none z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contact-bg-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4F8CFD" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
          <path fill="url(#contact-bg-gradient)" d="M40,-60C54,-52,68,-44,74,-31C80,-18,78,-1,70,12C62,25,48,34,36,44C24,54,12,65,-2,67C-16,69,-32,62,-44,52C-56,42,-64,29,-67,14C-70,-1,-68,-18,-60,-32C-52,-46,-38,-58,-24,-65C-10,-72,4,-74,18,-70C32,-66,46,-56,40,-60Z" transform="translate(100 100)" />
        </svg>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-blue-600 text-center flex items-center justify-center gap-2 relative z-10">
          <span className="inline-block text-blue-600 text-3xl">📬</span> Contact
        </h2>
        <div className="w-16 h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
        <div className="relative w-full z-10">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 animate-pulse opacity-30 blur-[2px] -z-10" />
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=sarfarazsaf224@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`, '_blank');
            
            // Show success message
            const successMsg = document.getElementById('contact-success');
            if (successMsg) {
              successMsg.classList.remove('hidden');
              setTimeout(() => successMsg.classList.add('hidden'), 5000);
            }
          }} className="flex flex-col gap-5 bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-200">
            {/* Floating label input */}
            <div className="relative">
              <input type="text" name="name" id="contact-name" required className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-transparent" placeholder="Your Name" />
              <label htmlFor="contact-name" className="absolute left-4 top-2 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none">Your Name</label>
            </div>
            <div className="relative">
              <input type="email" name="email" id="contact-email" required className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-transparent" placeholder="Your Email" />
              <label htmlFor="contact-email" className="absolute left-4 top-2 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none">Your Email</label>
            </div>
            <div className="relative">
              <textarea name="message" id="contact-message" required rows={4} className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 bg-white text-gray-900 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-transparent" placeholder="Your Message" />
              <label htmlFor="contact-message" className="absolute left-4 top-2 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm pointer-events-none">Your Message</label>
            </div>
            <button type="submit" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition text-lg shadow-lg flex items-center gap-2 justify-center transform hover:scale-105 focus:scale-105">
              <span>Send Message</span> <span className="text-xl">✈️</span>
            </button>
            {/* Success message placeholder */}
            <div className="hidden mt-2 text-green-600 font-semibold text-center" id="contact-success">Thank you for reaching out! I&apos;ll get back to you soon.</div>
          </form>
        </div>
      </SectionFadeIn>

      <footer className="text-center py-6 sm:py-8 text-gray-600 text-sm sm:text-base border-t border-gray-200 bg-gray-50/50 shadow-inner">
        &copy; {new Date().getFullYear()} Sarfaraz B Tonshyal. All rights reserved.
      </footer>
    </div>
  );
}
