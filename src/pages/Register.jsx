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
  X
} from "lucide-react";

const BACKEND_URL = "https://script.google.com/macros/s/AKfycbxV5iYwbY8xBoMnki_N8qKosRk2mu9kukqm8Hqg4quYT6OtFLJyYiQi_rnXTEdjzTr9/exec";

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
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target)) setYearDropdownOpen(false);
      if (genderDropdownRef.current && !genderDropdownRef.current.contains(event.target)) setGenderDropdownOpen(false);
      if (domainDropdownRef.current && !domainDropdownRef.current.contains(event.target)) setDomainDropdownOpen(false);
      if (accomDropdownRef.current && !accomDropdownRef.current.contains(event.target)) setAccomDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (systemAlertMessage.visible && alertContainerRef.current) {
      alertContainerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [systemAlertMessage]);

  const handleTextValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCustomSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        return;
      }
      setSelectedFile(file);
      setFileLabel(`📎 Attached: ${file.name}`);
      setSystemAlertMessage({ visible: false, text: "" });
    }
  };

  const handleCollegeIdFileUploadStream = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setSystemAlertMessage({ visible: true, text: "File size limit exceeded: Please upload a card under 4MB." });
        return;
      }
      setCollegeIdCard(file);
      setCollegeIdLabel(`📎 Attached: ${file.name}`);
      setSystemAlertMessage({ visible: false, text: "" });
    }
  };

  const handleAadhaarFileUploadStream = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setSystemAlertMessage({ visible: true, text: "File size limit exceeded: Please upload a card under 4MB." });
        return;
      }
      setAadhaarCard(file);
      setAadhaarLabel(`📎 Attached: ${file.name}`);
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

    if (!formData.gender) return setSystemAlertMessage({ visible: true, text: "Gender is required." });
    if (!formData.foodPreference) return setSystemAlertMessage({ visible: true, text: "Food preference is required." });
    if (!formData.accommodation) return setSystemAlertMessage({ visible: true, text: "Accommodation selection is required." });
    if (formData.accommodation === "YES" && !aadhaarCard) return setSystemAlertMessage({ visible: true, text: "Aadhaar card upload is required." });
    if (!formData.idCardNumber) return setSystemAlertMessage({ visible: true, text: "College ID card number is required." });
    if (!collegeIdCard) return setSystemAlertMessage({ visible: true, text: "College ID card upload is required." });
    if (!formData.year) return setSystemAlertMessage({ visible: true, text: "Academic year selection is required." });
    if (!formData.domainSelection) return setSystemAlertMessage({ visible: true, text: "Domain track selection is required." });
    if (!selectedFile) return setSystemAlertMessage({ visible: true, text: "Payment receipt screenshot is required." });

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
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        gender: formData.gender,
        college: formData.college.trim(),
        branch: formData.branch.trim(),
        year: formData.year,
        domainSelection: formData.domainSelection,
        accommodation: formData.accommodation,
        utr: formData.utr.trim(),
        foodPreference: formData.foodPreference,
        referredBy: formData.referredBy.trim(),

        // BUGFIX FILED: Explicitly bind the missing input identifier parameter payload
        idCardNumber: formData.idCardNumber.trim(),

        imageBase64: base64DataImageString,
        imageType: selectedFile.type,
        collegeIdCardBase64: collegeIdCardBase64,
        collegeIdCardType: collegeIdCard.type,
        aadhaarBase64: aadhaarBase64,
        aadhaarType: aadhaarType
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
      setSystemAlertMessage({ visible: true, text: "Connection Timeout: Failed to sync with the registration ledger." });
    } finally {
      setSubmittingState(false);
    }
  };

  const triggerStateViewReset = () => {
    setFormData({ fullName: "", email: "", phone: "", gender: "", college: "", branch: "", year: "", domainSelection: "", accommodation: "", utr: "", foodPreference: "", idCardNumber: "", referredBy: "" });
    setSelectedFile(null); setFileLabel("Click or Drag to upload payment screenshot");
    setCollegeIdCard(null); setCollegeIdLabel("Click or Drag to upload college ID card");
    setAadhaarCard(null); setAadhaarLabel("Click or Drag to upload Aadhaar card");
    setSystemAlertMessage({ visible: false, text: "" }); setViewStateMode("form"); setUploadProgress(0);
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

  return (
    <div class="min-h-screen text-slate-800 flex items-center justify-center p-3 sm:p-4 animate-fade-in w-full box-border relative">
      <div class="w-full max-w-3xl bg-white/80 border border-slate-200 shadow-[0_20px_50px_rgba(13,71,161,0.06)] rounded-[2rem] p-5 sm:p-8 md:p-12 overflow-hidden my-6">
        {viewStateMode === "form" ? (
          <div class="space-y-8">
            <div class="text-center space-y-3.5">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[10px] uppercase font-black text-blue-600 tracking-widest"><Zap size={10} /> AUNSF Event Platform</div>
              <h1 class="text-3xl font-black text-slate-900">Event Registration</h1>
            </div>

            <AnimatePresence>
              {systemAlertMessage.visible && (
                <motion.div ref={alertContainerRef} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} class="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs font-semibold text-rose-800 flex items-center gap-2">
                  <AlertTriangle size={16} class="text-rose-600" /> <span>{systemAlertMessage.text}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmissionEvent} class="space-y-6">
              <div class="text-xs font-black text-[#0D47A1] uppercase tracking-widest border-l-2 border-[#0D47A1] pl-3">👤 Personal Profile</div>
              <FloatingInput id="fullName" label="Full Name *" icon={User} value={formData.fullName} onChange={handleTextValueChange} />

              <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div class="md:col-span-5"><FloatingInput id="email" label="Email Address *" icon={Mail} type="email" value={formData.email} onChange={handleTextValueChange} /></div>
                <div class="md:col-span-4"><FloatingInput id="phone" label="Phone Number *" icon={Phone} type="tel" pattern="[0-9]{10}" value={formData.phone} onChange={handleTextValueChange} /></div>

                <div class="md:col-span-3 relative font-sans pt-5" ref={genderDropdownRef}>
                  <button type="button" onClick={() => setGenderDropdownOpen(!genderDropdownOpen)} class="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-left font-bold text-slate-800">{formData.gender ? formData.gender : "Gender *"}</button>
                  {genderDropdownOpen && (
                    <div class="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg">
                      <div onClick={() => handleCustomSelect("gender", "MALE")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">Male</div>
                      <div onClick={() => handleCustomSelect("gender", "FEMALE")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">Female</div>
                    </div>
                  )}
                </div>
              </div>

              <FloatingInput id="referredBy" label="Referred By (Optional)" icon={Users} value={formData.referredBy} onChange={handleTextValueChange} required={false} />

              <div class="space-y-2">
                <label class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Food Preference *</label>
                <div class="flex gap-4">
                  <button type="button" onClick={() => handleFoodPreferenceChange("VEG")} class={`p-4 border rounded-2xl w-1/2 font-bold text-sm ${formData.foodPreference === 'VEG' ? 'border-blue-500 bg-blue-50/20 text-blue-600' : 'border-slate-200'}`}>Veg</button>
                  <button type="button" onClick={() => handleFoodPreferenceChange("NON-VEG")} class={`p-4 border rounded-2xl w-1/2 font-bold text-sm ${formData.foodPreference === 'NON-VEG' ? 'border-blue-500 bg-blue-50/20 text-blue-600' : 'border-slate-200'}`}>Non-Veg</button>
                </div>
              </div>

              <div class="relative font-sans pt-3" ref={accomDropdownRef}>
                <label class="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Accommodation *</label>
                <button type="button" onClick={() => setAccomDropdownOpen(!accomDropdownOpen)} class="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-left font-bold text-slate-800">{formData.accommodation ? `Required: ${formData.accommodation}` : "Select Option"}</button>
                {accomDropdownOpen && (
                  <div class="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg">
                    <div onClick={() => handleCustomSelect("accommodation", "YES")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">Yes</div>
                    <div onClick={() => handleCustomSelect("accommodation", "NO")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">No</div>
                  </div>
                )}
              </div>

              {formData.accommodation === "YES" && (
                <div class="space-y-2 pt-2">
                  <label class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Aadhaar Card *</label>
                  <div class="relative flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 cursor-pointer">
                    <input type="file" accept="image/*" required onChange={handleAadhaarFileUploadStream} class="absolute inset-0 opacity-0 cursor-pointer z-10" />
                    <span class="text-xs font-semibold text-slate-600">{aadhaarLabel}</span>
                  </div>
                </div>
              )}

              <div class="text-xs font-black text-[#0D47A1] uppercase tracking-widest border-l-2 border-[#0D47A1] pl-3 pt-4">🎓 Academic Information</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput id="college" label="Institution / College *" icon={School} value={formData.college} onChange={handleTextValueChange} />
                <FloatingInput id="branch" label="Branch *" icon={Award} value={formData.branch} onChange={handleTextValueChange} />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div class="relative font-sans" ref={yearDropdownRef}>
                  <button type="button" onClick={() => setYearDropdownOpen(!yearDropdownOpen)} class="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-left font-bold text-slate-800">{getYearDropdownLabelText()}</button>
                  {yearDropdownOpen && (
                    <div class="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg">
                      <div onClick={() => handleCustomSelect("year", "1")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">1st Year</div>
                      <div onClick={() => handleCustomSelect("year", "2")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">2nd Year</div>
                      <div onClick={() => handleCustomSelect("year", "3")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">3rd Year</div>
                      <div onClick={() => handleCustomSelect("year", "4")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">4th Year</div>
                    </div>
                  )}
                </div>

                <div class="relative font-sans" ref={domainDropdownRef}>
                  <button type="button" onClick={() => setDomainDropdownOpen(!domainDropdownOpen)} class="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-left font-bold text-slate-800 truncate">{formData.domainSelection || "Choose Theme Domain *"}</button>
                  {domainDropdownOpen && (
                    <div class="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg">
                      <div onClick={() => handleCustomSelect("domainSelection", "Blue Economy")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">Blue Economy</div>
                      <div onClick={() => handleCustomSelect("domainSelection", "Human Behaviour & Civic Innovation")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">Human Behaviour & Civic Innovation</div>
                      <div onClick={() => handleCustomSelect("domainSelection", "Arts & Culture")} class="px-4 py-2 text-xs font-semibold hover:bg-blue-50 cursor-pointer">Arts & Culture</div>
                    </div>
                  )}
                </div>
              </div>

              <div class="space-y-4 pt-2">
                <FloatingInput id="idCardNumber" label="College ID Card Number *" icon={CreditCard} value={formData.idCardNumber} onChange={handleTextValueChange} />
                <div class="space-y-2">
                  <label class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload College ID Card *</label>
                  <div class="relative flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 cursor-pointer">
                    <input type="file" accept="image/*" required onChange={handleCollegeIdFileUploadStream} class="absolute inset-0 opacity-0 cursor-pointer z-10" />
                    <span class="text-xs font-semibold text-slate-600">{collegeIdLabel}</span>
                  </div>
                </div>
              </div>

              <div class="text-xs font-black text-[#0D47A1] uppercase tracking-widest border-l-2 border-[#0D47A1] pl-3 pt-4">💳 Payment Verification</div>
              <FloatingInput id="utr" label="Transaction UTR Reference Number *" icon={CreditCard} value={formData.utr} onChange={handleTextValueChange} />

              <div class="space-y-2">
                <label class="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Remittance Receipt Screenshot *</label>
                <div class="relative flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 cursor-pointer">
                  <input type="file" accept="image/*" required onChange={handleFileUploadStream} class="absolute inset-0 opacity-0 cursor-pointer z-10" />
                  <span class="text-xs font-semibold text-slate-600">{fileLabel}</span>
                </div>
              </div>

              <button type="submit" disabled={submittingState} class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm py-4 rounded-2xl shadow-lg transition flex items-center justify-center gap-2">
                <span>{submittingState ? `Processing Outbound Payload... ${uploadProgress}%` : "Submit Registration "}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div class="text-center py-12 space-y-6">
            <div class="mx-auto w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center shadow-md"><Check class="text-emerald-500" size={28} /></div>
            <div>
              <h2 class="text-2xl font-black text-slate-900">Submitted Successfully!</h2>
              <p class="text-sm font-semibold text-slate-500 max-w-sm mx-auto mt-2">Your registration parameters were securely synced with the core master ledger database sheets.</p>
            </div>
            <button onClick={triggerStateViewReset} class="bg-white text-slate-600 font-bold text-xs py-3.5 px-6 rounded-2xl border border-slate-200 shadow-sm">Lodge Another Registration</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;