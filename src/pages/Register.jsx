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
  Calendar,
  Users,
  Home,
  Target,
  Info,
  X
} from "lucide-react";

// REPLACE THIS STRING WITH YOUR LIVE DEPLOYED WEB APP URL
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbx30L0n7gS9WPCfRzhj3Y0xRZcCs0XVRz3cm9MLNvZeJ9LTll2iji7sxIBMMjWXAxOgSA/exec";

// Premium Custom Floating Input Component in Light Theme
const FloatingInput = ({ id, label, icon: Icon, value, onChange, type = "text", required = true, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full font-sans pt-5">
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
          className={`peer w-full bg-slate-50/50 border rounded-2xl ${Icon ? 'pl-11' : 'px-4'} pr-4 py-3.5 text-sm text-slate-800 placeholder-transparent outline-none transition-all duration-300 ${isFocused
            ? 'border-blue-500 shadow-[0_0_15px_rgba(13,71,161,0.06)] bg-white'
            : 'border-slate-200 hover:border-slate-300'
            }`}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className={`absolute left-0 top-0 transition-all duration-300 pointer-events-none text-sm font-semibold origin-top-left text-slate-400 translate-y-4 ${Icon ? 'translate-x-11' : 'translate-x-4'} peer-focus:-translate-y-7 peer-focus:scale-[0.85] peer-focus:text-blue-600 peer-focus:font-bold peer-focus:translate-x-0 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-slate-500 peer-[:not(:placeholder-shown)]:translate-x-0`}
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
    gender: "",
    college: "",
    branch: "",
    year: "",
    domainSelection: "",
    accommodation: "",
    utr: "",
    foodPreference: "",
    idCardNumber: "",
    referredBy: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLabel, setFileLabel] = useState("Click or Drag to upload payment screenshot");
  const [submittingState, setSubmittingState] = useState(false);
  const [viewStateMode, setViewStateMode] = useState("form");
  const [systemAlertMessage, setSystemAlertMessage] = useState({ visible: false, text: "" });

  const [collegeIdCard, setCollegeIdCard] = useState(null);
  const [collegeIdLabel, setCollegeIdLabel] = useState("Click or Drag to upload college ID card");
  const [collegeIdPreview, setCollegeIdPreview] = useState(null);

  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [aadhaarLabel, setAadhaarLabel] = useState("Click or Drag to upload Aadhaar card");
  const [aadhaarPreview, setAadhaarPreview] = useState(null);

  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [accomDropdownOpen, setAccomDropdownOpen] = useState(false);

  const [filePreview, setFilePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const yearDropdownRef = useRef(null);
  const genderDropdownRef = useRef(null);
  const domainDropdownRef = useRef(null);
  const accomDropdownRef = useRef(null);
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

  useEffect(() => {
    if (!collegeIdCard) {
      setCollegeIdPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(collegeIdCard);
    setCollegeIdPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [collegeIdCard]);

  useEffect(() => {
    if (!aadhaarCard) {
      setAadhaarPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(aadhaarCard);
    setAadhaarPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [aadhaarCard]);

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
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) {
        setYearDropdownOpen(false);
      }
      if (genderDropdownRef.current && !genderDropdownRef.current.contains(event.target)) {
        setGenderDropdownOpen(false);
      }
      if (domainDropdownRef.current && !domainDropdownRef.current.contains(event.target)) {
        setDomainDropdownOpen(false);
      }
      if (accomDropdownRef.current && !accomDropdownRef.current.contains(event.target)) {
        setAccomDropdownOpen(false);
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

  const handleCustomSelect = (field, value) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      return updated;
    });
    setSystemAlertMessage({ visible: false, text: "" });
    if (field === "accommodation" && value === "NO") {
      setAadhaarCard(null);
      setAadhaarLabel("Click or Drag to upload Aadhaar card");
    }
  };

  const handleFoodPreferenceChange = (value) => {
    setFormData(prev => ({ ...prev, foodPreference: value }));
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

  const handleCollegeIdFileUploadStream = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setSystemAlertMessage({ visible: true, text: "File size limit exceeded: Please upload a college ID card under 4MB." });
        e.target.value = null;
        setCollegeIdCard(null);
        setCollegeIdLabel("Click or Drag to upload college ID card");
        return;
      }
      setCollegeIdCard(file);
      setCollegeIdLabel(`📎 Attached: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      setSystemAlertMessage({ visible: false, text: "" });
    }
  };

  const handleAadhaarFileUploadStream = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setSystemAlertMessage({ visible: true, text: "File size limit exceeded: Please upload an Aadhaar card under 4MB." });
        e.target.value = null;
        setAadhaarCard(null);
        setAadhaarLabel("Click or Drag to upload Aadhaar card");
        return;
      }
      setAadhaarCard(file);
      setAadhaarLabel(`📎 Attached: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
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

    if (!formData.gender) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Please select your Gender profiling tag." });
      return;
    }

    if (!formData.foodPreference) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Food preference must be selected." });
      return;
    }

    if (!formData.accommodation) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Specify accommodation arrangement choice." });
      return;
    }

    if (formData.accommodation === "YES" && !aadhaarCard) {
      setSystemAlertMessage({ visible: true, text: "Upload Required: Aadhaar card must be attached." });
      return;
    }

    if (!formData.idCardNumber) {
      setSystemAlertMessage({ visible: true, text: "Input Required: Please enter your ID card number." });
      return;
    }

    if (!collegeIdCard) {
      setSystemAlertMessage({ visible: true, text: "Upload Required: College ID card must be attached." });
      return;
    }

    if (!formData.year) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Please select your academic cohort year." });
      return;
    }

    if (!formData.domainSelection) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Please choose your track Domain Selection." });
      return;
    }

    if (!selectedFile) {
      setSystemAlertMessage({ visible: true, text: "Upload Required: Payment receipt screenshot must be attached." });
      return;
    }

    setSubmittingState(true);

    try {
      const base64DataImageString = await parseFileToBase64(selectedFile);
      const collegeIdCardBase64 = await parseFileToBase64(collegeIdCard);
      let aadhaarBase64 = "";
      let aadhaarType = "";

      if (formData.accommodation === "YES" && aadhaarCard) {
        aadhaarBase64 = await parseFileToBase64(aadhaarCard);
        aadhaarType = aadhaarCard.type;
      }

      const payloadBundle = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
        domainSelection: formData.domainSelection,
        accommodation: formData.accommodation,
        utr: formData.utr,
        imageBase64: base64DataImageString,
        imageType: selectedFile.type,
        foodPreference: formData.foodPreference,
        collegeIdCardBase64: collegeIdCardBase64,
        collegeIdCardType: collegeIdCard.type,
        aadhaarBase64: aadhaarBase64,
        aadhaarType: aadhaarType,
        referredBy: formData.referredBy,
        idCardNumber: formData.idCardNumber,
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
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      college: "",
      branch: "",
      year: "",
      domainSelection: "",
      accommodation: "",
      utr: "",
      foodPreference: "",
      idCardNumber: "",
      referredBy: ""
    });
    setSelectedFile(null);
    setFileLabel("Click or Drag to upload payment screenshot");
    setCollegeIdCard(null);
    setCollegeIdLabel("Click or Drag to upload college ID card");
    setAadhaarCard(null);
    setAadhaarLabel("Click or Drag to upload Aadhaar card");
    setSystemAlertMessage({ visible: false, text: "" });
    setViewStateMode("form");
    setUploadProgress(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getYearDropdownLabelText = () => {
    switch (formData.year) {
      case "1": return "1st Year (Freshman)";
      case "2": return "2nd Year (Sophomore)";
      case "3": return "3rd Year (Junior)";
      case "4": return "4th Year (Senior)";
      default: return "Select Cohort Year";
    }
  };

  const getGenderDropdownLabelText = () => {
    switch (formData.gender) {
      case "MALE": return "Male";
      case "FEMALE": return "Female";
      case "OTHER": return "Other";
      default: return "Select Gender";
    }
  };

  const getAccomDropdownLabelText = () => {
    switch (formData.accommodation) {
      case "YES": return "Yes";
      case "NO": return "No";
      default: return "Select Accommodation";
    }
  };

  const normalizedCollege = formData.college ? formData.college.trim().toLowerCase().replace(/\s+/g, ' ') : "";
  let eligibilityStatus = 'EMPTY';
  if (normalizedCollege) {
    if (normalizedCollege === 'anurag university' || normalizedCollege === 'au') {
      eligibilityStatus = 'EARLY_BIRD';
    } else {
      eligibilityStatus = 'REGULAR';
    }
  }

  // Heading animation (fade + slide)
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
        <h1 className="text-4xl font-black text-[#0D47A1] mb-4">
          Registrations Closed
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed">
          Thank you for the overwhelming response.
          <br />
          Registrations for <strong>AUNSF 4.0</strong> are now officially closed.
        </p>
      </div>
    </div>
  );
};

export default Register;