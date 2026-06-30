import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  School, 
  Award, 
  ChevronDown, 
  Check, 
  AlertTriangle, 
  Upload, 
  CreditCard, 
  ArrowRight,
  Zap,
  Calendar
} from "lucide-react";

// REPLACE THIS STRING WITH YOUR LIVE DEPLOYED WEB APP URL
const BACKEND_URL = "https://script.google.com/macros/s/AKfycby5bz0GI20VxLh_FQOESgzX9V1N54KaPxHuDKlSZT_uu7rswK8QfU0gbxW4k3BSCfqpXQ/exec";

// Premium Custom Floating Input Component in Light Theme
const FloatingInput = ({ id, label, icon: Icon, value, onChange, type = "text", required = true, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative space-y-1 group w-full font-sans">
      <div className="relative flex items-center">
        {Icon && (
          <div className={`absolute left-4 z-20 pointer-events-none transition-colors duration-300 ${isFocused ? 'text-blue-600' : 'text-slate-400'}`}>
            <Icon size={18} />
          </div>
        )}
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-slate-50/50 border rounded-2xl ${Icon ? 'pl-11' : 'px-4'} pr-4 py-3.5 text-sm text-slate-800 placeholder-transparent outline-none transition-all duration-300 ${
            isFocused
              ? 'border-blue-500 shadow-[0_0_15px_rgba(13,71,161,0.06)] bg-white'
              : 'border-slate-200 hover:border-slate-300'
          }`}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className={`absolute left-0 top-0 transition-all duration-300 pointer-events-none text-xs font-semibold ${
            isFocused || hasValue
              ? `-translate-y-7 scale-90 ${isFocused ? 'text-blue-600 font-bold' : 'text-slate-500'}`
              : `translate-y-4 ${Icon ? 'translate-x-11' : 'translate-x-4'} text-slate-400`
          }`}
        >
          {label}
        </label>
        
        {/* Animated bottom line */}
        <span className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 -translate-x-1/2 ${isFocused ? 'w-[90%]' : 'w-0'}`} />
      </div>
    </div>
  );
};

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
    utr: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLabel, setFileLabel] = useState("Click or Drag to upload payment screenshot");
  const [submittingState, setSubmittingState] = useState(false);
  const [viewStateMode, setViewStateMode] = useState("form");
  const [systemAlertMessage, setSystemAlertMessage] = useState({ visible: false, text: "" });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const dropdownRef = useRef(null);
  const alertContainerRef = useRef(null);

  // File Preview Stream
  useEffect(() => {
    if (!selectedFile) {
      setFilePreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setFilePreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  // Simulated Upload Progress
  useEffect(() => {
    let interval;
    if (submittingState) {
      setUploadProgress(10);
      interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.floor(Math.random() * 12) + 4;
        });
      }, 250);
    } else {
      setUploadProgress(0);
    }
    return () => clearInterval(interval);
  }, [submittingState]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (systemAlertMessage.visible && alertContainerRef.current) {
      alertContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [systemAlertMessage]);

  const handleTextValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDropdownSelect = (value) => {
    setFormData({ ...formData, year: value });
    setDropdownOpen(false);
    setSystemAlertMessage({ visible: false, text: "" });
  };

  const handleFileUploadStream = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setSystemAlertMessage({ visible: true, text: "File size limit exceeded: Please upload a screenshot under 4MB." });
        e.target.value = null;
        setSelectedFile(null);
        setFileLabel("Click or Drag to upload payment screenshot");
        return;
      }
      setSelectedFile(file);
      setFileLabel(`📎 Attached: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      setSystemAlertMessage({ visible: false, text: "" });
    }
  };

  const parseFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFormSubmissionEvent = async (e) => {
    e.preventDefault();
    setSystemAlertMessage({ visible: false, text: "" });

    if (!formData.year) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Please select your academic cohort year." });
      return;
    }

    if (!selectedFile) {
      setSystemAlertMessage({ visible: true, text: "Upload Required: Payment receipt screenshot must be attached." });
      return;
    }

    setSubmittingState(true);

    try {
      const base64DataImageString = await parseFileToBase64(selectedFile);

      const payloadBundle = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
        utr: formData.utr,
        imageBase64: base64DataImageString,
        imageType: selectedFile.type,
      };

      const networkResponse = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payloadBundle),
      });

      const outcomeDataResult = await networkResponse.json();

      if (outcomeDataResult.status === "success") {
        setUploadProgress(100);
        setTimeout(() => {
          setViewStateMode("success");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
      } else {
        setSystemAlertMessage({ visible: true, text: `Submission Rejected: ${outcomeDataResult.message}` });
      }
    } catch (error) {
      console.error(error);
      setSystemAlertMessage({ visible: true, text: "Connection Timeout: Failed to sync with the primary registration ledger." });
    } finally {
      setSubmittingState(false);
    }
  };

  const triggerStateViewReset = () => {
    setFormData({ fullName: "", email: "", phone: "", college: "", branch: "", year: "", utr: "" });
    setSelectedFile(null);
    setFileLabel("Click or Drag to upload payment screenshot");
    setSystemAlertMessage({ visible: false, text: "" });
    setViewStateMode("form");
    setUploadProgress(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getDropdownLabelText = () => {
    switch (formData.year) {
      case "1": return "1st Year (Freshman)";
      case "2": return "2nd Year (Sophomore)";
      case "3": return "3rd Year (Junior)";
      case "4": return "4th Year (Senior)";
      default: return "Select Cohort Year";
    }
  };

  // Header Letter animations
  const titleText = "Event Registration";
  const titleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };
  const titleLetter = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 12 } }
  };

  return (
    <div className="min-h-screen text-slate-800 flex items-center justify-center p-3 sm:p-4 md:p-8 antialiased selection:bg-blue-500/10 font-['Plus_Jakarta_Sans',sans-serif] w-full box-border relative z-0">
      
      {/* Background Layer with soft blue glow and blurred circles */}
      <div className="fixed inset-0 bg-gradient-to-br from-light-blue-purple via-white to-light-blue-purple -z-50 select-none pointer-events-none overflow-hidden">
        {/* Soft Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />

        {/* Ambient subtle light circles */}
        <motion.div 
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-400/10 blur-[80px]"
        />

        <motion.div 
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-400/10 blur-[90px]"
        />
      </div>

      {/* Main Page Entry Container (White Glassmorphism) */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", scale: 0.97 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.1 }}
        className="relative w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_rgba(13,71,161,0.06)] rounded-[2rem] p-5 sm:p-8 md:p-12 overflow-hidden my-6 box-border"
      >
        {/* Decorative subtle header light effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

        {viewStateMode === "form" ? (
          <div className="space-y-8">
            
            {/* Header Section */}
            <div className="text-center space-y-3.5">
              <motion.div 
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200/60 rounded-full text-[10px] uppercase tracking-widest font-black text-blue-600 select-none"
              >
                <Zap size={10} className="fill-blue-600 text-blue-600" /> AUNSF Event Platform
              </motion.div>

              <motion.h1 
                variants={titleContainer}
                initial="hidden"
                animate="show"
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight bg-gradient-to-b from-[#0D47A1] to-slate-900 bg-clip-text text-transparent px-1 select-none"
              >
                {titleText.split("").map((char, index) => (
                  <motion.span key={index} variants={titleLetter} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto px-2 leading-relaxed font-semibold"
              >
                Complete the registration form below to secure your participation in AUNSF 4.0.
              </motion.p>
            </div>

            {/* Error alerts with elegant spring animations */}
            <AnimatePresence>
              {systemAlertMessage.visible && (
                <motion.div
                  ref={alertContainerRef}
                  initial={{ opacity: 0, y: -15, scale: 0.97 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    x: [0, -8, 8, -8, 8, 0]
                  }}
                  exit={{ opacity: 0, y: -15, scale: 0.97 }}
                  transition={{ 
                    type: "spring", 
                    duration: 0.5,
                    x: { type: "tween", duration: 0.4 }
                  }}
                  className="p-4 bg-rose-500/5 backdrop-blur-md text-rose-800 border border-rose-500/20 rounded-2xl text-xs font-semibold scroll-mt-24 shadow-md shadow-rose-900/5"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-rose-600 shrink-0" />
                    <span>{systemAlertMessage.text}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmissionEvent} className="space-y-8">
              
              {/* SECTION 1: REGISTRATION FEE STRUCTURE */}
              <div className="space-y-4">
                <div className="text-xs font-black text-[#0D47A1] uppercase tracking-widest flex items-center gap-2 select-none font-sans border-l-2 border-[#0D47A1] pl-3">
                  🏷️ Registration Fee Structure
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  
                  {/* Card 1: Early Bird */}
                  <motion.div 
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm group"
                  >
                    {/* Animated shine sweep on card hover */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12 pointer-events-none"
                    />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-orange-50 border border-orange-200 text-orange-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                          🔥 Valid until 18th July
                        </div>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-800 select-none">
                        Early Bird Registration
                      </h3>
                      
                      <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-end bg-slate-50 border border-slate-100 p-3 rounded-xl">
                          <span className="text-xs font-semibold text-slate-500">Without Accommodation</span>
                          <span className="text-lg font-black text-slate-800">₹999</span>
                        </div>
                        <div className="flex justify-between items-end bg-slate-50 border border-slate-100 p-3 rounded-xl">
                          <span className="text-xs font-semibold text-slate-500">With Accommodation</span>
                          <span className="text-lg font-black text-orange-600">₹1599</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col space-y-2">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Payment Link</span>
                      <a
                        href="https://linktr.ee/aunsf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-3 px-4 bg-gradient-to-r from-[#D94B2B] to-[#FF5A36] text-white text-xs font-bold rounded-xl shadow-md hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 select-none flex items-center justify-center gap-1"
                      >
                        [ Early Bird Payment URL ] <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>

                  {/* Card 2: Standard Registration */}
                  <motion.div 
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="relative overflow-hidden bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm group"
                  >
                    {/* Animated shine sweep on card hover */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transform -skew-x-12 pointer-events-none"
                    />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                          Standard Registration
                        </div>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-800 select-none">
                        Regular Registration
                      </h3>
                      
                      <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-end bg-slate-50 border border-slate-100 p-3 rounded-xl">
                          <span className="text-xs font-semibold text-slate-500">Without Accommodation</span>
                          <span className="text-lg font-black text-slate-800">₹1199</span>
                        </div>
                        <div className="flex justify-between items-end bg-slate-50 border border-slate-100 p-3 rounded-xl">
                          <span className="text-xs font-semibold text-slate-500">With Accommodation</span>
                          <span className="text-lg font-black text-blue-600">₹1799</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col space-y-2">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Payment Link</span>
                      <a
                        href="https://linktr.ee/aunsf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-xl shadow-md hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 select-none flex items-center justify-center gap-1"
                      >
                        [ Regular Registration URL ] <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* SECTION 2: PERSONAL DETAILS */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-black text-[#0D47A1] uppercase tracking-widest flex items-center gap-2 select-none font-sans border-l-2 border-[#0D47A1] pl-3">
                  👤 Personal Details
                </div>

                <div className="space-y-5">
                  <FloatingInput 
                    id="fullName" 
                    label="Full Name *" 
                    icon={User} 
                    value={formData.fullName} 
                    onChange={handleTextValueChange}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FloatingInput 
                      id="email" 
                      label="Email Address *" 
                      icon={Mail} 
                      type="email"
                      value={formData.email} 
                      onChange={handleTextValueChange}
                    />
                    <FloatingInput 
                      id="phone" 
                      label="Phone Number *" 
                      icon={Phone} 
                      type="tel"
                      pattern="[0-9]{10}"
                      value={formData.phone} 
                      onChange={handleTextValueChange}
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 3: ACADEMIC DETAILS */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-black text-[#0D47A1] uppercase tracking-widest flex items-center gap-2 select-none border-l-2 border-[#0D47A1] pl-3">
                  🎓 Academic Details
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5">
                  <div className="sm:col-span-1 md:col-span-5">
                    <FloatingInput 
                      id="college" 
                      label="Institution / College *" 
                      icon={School} 
                      value={formData.college} 
                      onChange={handleTextValueChange}
                    />
                  </div>

                  <div className="sm:col-span-1 md:col-span-3">
                    <FloatingInput 
                      id="branch" 
                      label="Branch *" 
                      icon={Award} 
                      value={formData.branch} 
                      onChange={handleTextValueChange}
                    />
                  </div>

                  {/* Dropdown with Floating Label and Light Theme matching inputs */}
                  <div className="sm:col-span-2 md:col-span-4 relative group w-full font-sans" ref={dropdownRef}>
                    <div className="relative flex items-center">
                      <div className={`absolute left-4 z-20 pointer-events-none transition-colors duration-300 ${dropdownOpen ? 'text-blue-600' : 'text-slate-400'}`}>
                        <Calendar size={18} />
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`w-full bg-slate-50/50 border rounded-2xl pl-11 pr-10 py-3.5 text-sm outline-none transition-all duration-300 text-left cursor-pointer min-w-full ${
                          dropdownOpen
                            ? 'border-blue-500 shadow-[0_0_15px_rgba(13,71,161,0.06)] bg-white text-slate-800'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className={`truncate block whitespace-nowrap ${formData.year ? "text-slate-900 font-extrabold" : "text-transparent"}`}>
                          {getDropdownLabelText()}
                        </span>
                        
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${dropdownOpen ? "rotate-180" : ""}`} />
                        </div>
                      </button>
                      
                      <label
                        className={`absolute left-0 top-0 transition-all duration-300 pointer-events-none text-xs font-semibold ${
                          dropdownOpen || (formData.year && formData.year.length > 0)
                            ? `-translate-y-7 scale-90 ${dropdownOpen ? 'text-blue-600 font-bold' : 'text-slate-500'}`
                            : `translate-y-4 translate-x-11 text-slate-400`
                        }`}
                      >
                        Academic Year *
                      </label>
                      
                      <span className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 -translate-x-1/2 ${dropdownOpen ? 'w-[90%]' : 'w-0'}`} />
                    </div>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          transition={{ type: "spring", duration: 0.3 }}
                          className="absolute left-0 z-50 w-full mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-1 origin-top"
                        >
                          <div onClick={() => handleDropdownSelect("1")} className="px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">1st Year (Freshman)</div>
                          <div onClick={() => handleDropdownSelect("2")} className="px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">2nd Year (Sophomore)</div>
                          <div onClick={() => handleDropdownSelect("3")} className="px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">3rd Year (Junior)</div>
                          <div onClick={() => handleDropdownSelect("4")} className="px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">4th Year (Senior)</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* SECTION 4: UPI UTR TRANSACTION & SCREENSHOT */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-black text-[#0D47A1] uppercase tracking-widest flex items-center gap-2 select-none font-sans border-l-2 border-[#0D47A1] pl-3">
                  💳 Remittance Verification
                </div>

                <div className="bg-slate-50/60 border border-slate-200/80 p-5 sm:p-6 rounded-[2rem] space-y-6">
                  
                  {/* UTR Number field */}
                  <div className="space-y-2">
                    <FloatingInput 
                      id="utr" 
                      label="UPI / Banking Transaction UTR Reference Number *" 
                      icon={CreditCard} 
                      value={formData.utr} 
                      onChange={handleTextValueChange}
                    />
                  </div>

                  {/* Upload Receipt drag box */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1 select-none">
                      Upload Remittance Receipt Screenshot *
                    </label>
                    
                    <div className="relative flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 hover:bg-slate-50/80 hover:border-blue-500/40 transition-all duration-300 cursor-pointer group min-h-[140px]">
                      <input 
                        type="file" 
                        id="screenshotInput" 
                        accept="image/png, image/jpeg, image/jpg" 
                        required 
                        onChange={handleFileUploadStream} 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      />
                      
                      {filePreview ? (
                        <div className="relative w-full h-40 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 pointer-events-none">
                          <img src={filePreview} alt="Receipt preview" className="w-full h-full object-contain" />
                          <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-xs font-semibold px-3 py-1.5 bg-slate-900/80 rounded-full border border-slate-800">Change Screenshot</span>
                          </div>
                          
                          <div className="absolute top-2 right-2 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg border border-emerald-400">
                            <Check size={14} strokeWidth={3} />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-3 px-2 pointer-events-none">
                          <motion.div 
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                            className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 group-hover:border-blue-500/20 transition-all duration-300"
                          >
                            <Upload size={20} />
                          </motion.div>
                          <p className="text-xs font-bold text-slate-600 break-all transition group-hover:text-slate-800 px-4">{fileLabel}</p>
                          <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">PNG, JPG, or JPEG up to 4MB</p>
                        </div>
                      )}

                      {/* simulated progress bar */}
                      {submittingState && (
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 rounded-b-2xl overflow-hidden pointer-events-none">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            transition={{ duration: 0.2 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                          />
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>

              {/* Submit CTA button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={submittingState} 
                  className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[size:200%_auto] hover:bg-right text-white font-extrabold text-sm py-4 px-6 rounded-2xl shadow-[0_4px_25px_rgba(13,71,161,0.12)] hover:shadow-[0_4px_30px_rgba(13,71,161,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 tracking-wide cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-75 disabled:pointer-events-none select-none"
                  style={{ transition: "background-position 0.6s ease, transform 0.2s ease, box-shadow 0.3s ease" }}
                >
                  {/* Shine sweep overlay */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 pointer-events-none"
                  />

                  {submittingState ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Encrypting Data & Syncing Ledger...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Registration</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* SUCCESS VIEW STAGE (Light Theme Glassmorphic Card) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-center py-12 px-4 space-y-6 flex flex-col items-center animate-fade-in"
          >
            {/* Pulsing Emerald circles */}
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 w-24 h-24 bg-emerald-500/10 rounded-full -m-4 blur-md pointer-events-none"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative w-16 h-16 bg-emerald-50/60 border border-emerald-500/25 text-emerald-600 rounded-full flex items-center justify-center shadow-md shadow-emerald-500/5"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </motion.div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent select-none">Submitted Successfully!</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-sm mx-auto leading-relaxed">
                Your registration profile and transaction indicators have been securely logged. Your pass credentials will be transmitted to your email address shortly.
              </p>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
              <button 
                onClick={triggerStateViewReset} 
                className="bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-700 font-extrabold text-xs py-3.5 px-8 rounded-xl transition border border-slate-200 cursor-pointer shadow-sm select-none flex items-center gap-1.5"
              >
                Lodge Another Registration
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Register;