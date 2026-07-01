import React, { useState, useRef, useEffect } from "react";

// MASTER GOOGLE APPS SCRIPT TARGET ROUTER INSTANCE
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbxV5iYwbY8xBoMnki_N8qKosRk2mu9kukqm8Hqg4quYT6OtFLJyYiQi_rnXTEdjzTr9/exec";

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
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLabel, setFileLabel] = useState("Click or Drag to upload payment screenshot");
  const [submittingState, setSubmittingState] = useState(false);
  const [viewStateMode, setViewStateMode] = useState("form");
  const [systemAlertMessage, setSystemAlertMessage] = useState({ visible: false, text: "" });

  // Custom tracking flags for UI overlay wrappers
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const [accomDropdownOpen, setAccomDropdownOpen] = useState(false);

  const yearRef = useRef(null);
  const genderRef = useRef(null);
  const domainRef = useRef(null);
  const accomRef = useRef(null);
  const alertContainerRef = useRef(null);

  // Updated array configuration with combined Year and Text naming tiers
  const cohortOptions = [
    { value: "1", label: "Fresher (Year 1)" },
    { value: "2", label: "Sophomore (Year 2)" },
    { value: "3", label: "Junior (Year 3)" },
    { value: "4", label: "Senior (Year 4)" }
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (yearRef.current && !yearRef.current.contains(event.target)) setYearDropdownOpen(false);
      if (genderRef.current && !genderRef.current.contains(event.target)) setGenderDropdownOpen(false);
      if (domainRef.current && !domainRef.current.contains(event.target)) setDomainDropdownOpen(false);
      if (accomRef.current && !accomRef.current.contains(event.target)) setAccomDropdownOpen(false);
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
    setFormData({ ...formData, [field]: value });
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

    if (!formData.gender) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Please select your Gender profiling tag." });
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
    if (!formData.accommodation) {
      setSystemAlertMessage({ visible: true, text: "Selection Required: Specify accommodation arrangement choice." });
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
        gender: formData.gender,
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
        domainSelection: formData.domainSelection,
        accommodation: formData.accommodation,
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
        setViewStateMode("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
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
    setFormData({ fullName: "", email: "", phone: "", gender: "", college: "", branch: "", year: "", domainSelection: "", accommodation: "", utr: "" });
    setSelectedFile(null);
    setFileLabel("Click or Drag to upload payment screenshot");
    setSystemAlertMessage({ visible: false, text: "" });
    setViewStateMode("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/60 text-slate-800 flex items-center justify-center p-3 sm:p-4 md:p-8 antialiased selection:bg-blue-500/10 font-['Plus_Jakarta_Sans',sans-serif] w-full box-border font-medium">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] rounded-3xl p-5 sm:p-6 md:p-10 overflow-hidden transition-all duration-500 my-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-blue-500/5 to-transparent blur-2xl pointer-events-none rounded-full"></div>

        {viewStateMode === "form" ? (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex px-3 py-1 bg-blue-50/80 border border-blue-200 rounded-full text-[10px] uppercase tracking-widest font-extrabold text-blue-600 select-none">AUNSF Event Platform</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 px-1">Event Access Registration</h1>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto px-2">Provide your accurate profiling parameters and payment verification identifiers below to secure entry credentials.</p>
            </div>

            {systemAlertMessage.visible && (
              <div ref={alertContainerRef} className="p-4 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-semibold transition-all duration-300 scroll-mt-6">
                {systemAlertMessage.text}
              </div>
            )}

            <form onSubmit={handleFormSubmissionEvent} className="space-y-5 sm:space-y-6">
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                <input type="text" id="fullName" required value={formData.fullName} onChange={handleTextValueChange} placeholder="Enter full legal name" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-1">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleTextValueChange} placeholder="name@domain.com" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition" />
                </div>

                <div className="space-y-1 relative" ref={genderRef}>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Gender *</label>
                  <button type="button" onClick={() => setGenderDropdownOpen(!genderDropdownOpen)} className="flex items-center justify-between w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition text-left cursor-pointer font-medium">
                    <span className={`truncate block ${formData.gender ? "text-slate-950 font-extrabold" : "text-slate-400"}`}>{formData.gender || "Select Gender"}</span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform ml-1 ${genderDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {genderDropdownOpen && (
                    <div className="absolute left-0 z-50 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl py-1">
                      {["MALE", "FEMALE", "OTHER"].map((g) => (
                        <div key={g} onClick={() => { handleCustomSelect("gender", g); setGenderDropdownOpen(false); }} className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">{g}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                  <input type="tel" id="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleTextValueChange} placeholder="10-digit mobile number" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition" />
                </div>

                <div className="space-y-1 relative" ref={yearRef}>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Academic Cohort Year *</label>
                  <button type="button" onClick={() => setYearDropdownOpen(!yearDropdownOpen)} className="flex items-center justify-between w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition text-left cursor-pointer font-medium">
                    <span className={`truncate block ${formData.year ? "text-slate-950 font-extrabold" : "text-slate-400"}`}>
                      {formData.year ? cohortOptions.find(c => c.value === formData.year)?.label : "Select Batch Year"}
                    </span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform ml-1 ${yearDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {yearDropdownOpen && (
                    <div className="absolute left-0 z-50 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl py-1">
                      {cohortOptions.map((opt) => (
                        <div key={opt.value} onClick={() => { handleCustomSelect("year", opt.value); setYearDropdownOpen(false); }} className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">{opt.label}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="college" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Institution / College *</label>
                  <input type="text" id="college" required value={formData.college} onChange={handleTextValueChange} placeholder="e.g., ANURAG UNI" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition uppercase" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="branch" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Branch *</label>
                  <input type="text" id="branch" required value={formData.branch} onChange={handleTextValueChange} placeholder="e.g., CSE" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition uppercase" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 relative" ref={domainRef}>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Domain Selection *</label>
                  <button type="button" onClick={() => setDomainDropdownOpen(!domainDropdownOpen)} className="flex items-center justify-between w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition text-left cursor-pointer font-medium">
                    <span className={`truncate block ${formData.domainSelection ? "text-slate-950 font-extrabold" : "text-slate-400"}`}>{formData.domainSelection || "Choose Theme Domain"}</span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform ml-1 ${domainDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {domainDropdownOpen && (
                    <div className="absolute left-0 z-50 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl py-1">
                      {["Blue Economy", "Mindspace", "Arts & Culture"].map((d) => (
                        <div key={d} onClick={() => { handleCustomSelect("domainSelection", d); setDomainDropdownOpen(false); }} className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">{d}</div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-1 relative" ref={accomRef}>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Accommodation Required *</label>
                  <button type="button" onClick={() => setAccomDropdownOpen(!accomDropdownOpen)} className="flex items-center justify-between w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition text-left cursor-pointer font-medium">
                    <span className={`truncate block ${formData.accommodation ? "text-slate-950 font-extrabold" : "text-slate-400"}`}>{formData.accommodation ? `${formData.accommodation} Needed` : "Select Accommodation"}</span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform ml-1 ${accomDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {accomDropdownOpen && (
                    <div className="absolute left-0 z-50 w-full mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl py-1">
                      {["YES", "NO"].map((a) => (
                        <div key={a} onClick={() => { handleCustomSelect("accommodation", a); setAccomDropdownOpen(false); }} className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">{a}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <hr className="border-slate-100 my-4" />

              <div className="bg-slate-50/60 p-4 sm:p-5 rounded-2xl border border-slate-200/60 space-y-4">
                <div className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-1.5 select-none">💳 Audit & Remittance Verification</div>
                <div className="space-y-1">
                  <label htmlFor="utr" className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">UPI / Banking Transaction UTR Reference Number *</label>
                  <input type="text" id="utr" required value={formData.utr} onChange={handleTextValueChange} placeholder="Enter 12-digit UTR verification code" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition uppercase font-mono tracking-wider" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Upload Remittance Receipt Screenshot *</label>
                  <div className="relative flex items-center justify-center bg-white border border-dashed border-slate-200 rounded-xl p-4 sm:p-5 hover:border-slate-300 transition cursor-pointer">
                    <input type="file" id="screenshotInput" accept="image/png, image/jpeg, image/jpg" required onChange={handleFileUploadStream} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="text-center space-y-1 px-2">
                      <p className="text-xs font-semibold text-slate-500 break-all">{fileLabel}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide">PNG, JPG, or JPEG up to 4MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={submittingState} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm py-4 px-6 rounded-xl shadow-lg shadow-blue-600/10 transition-all duration-200 tracking-wide cursor-pointer flex items-center justify-center gap-2 group">
                <span>{submittingState ? "Encrypting Data & Syncing Ledger..." : "Submit Registration Portfolio"}</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="mx-auto w-14 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center shadow-sm shadow-emerald-500/5">
              <span className="text-emerald-500 text-2xl font-black">✓</span>
            </div>
            <div className="space-y-2 px-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Submitted Successfully!</h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500 max-w-sm mx-auto">Your registration status and other details will be sent to your email id shortly.</p>
            </div>
            <div className="pt-4">
              <button onClick={triggerStateViewReset} className="bg-white hover:bg-slate-50 text-slate-500 font-bold text-xs py-3 px-6 rounded-xl transition border border-slate-200 cursor-pointer shadow-sm">
                ↩ Lodge Another Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;