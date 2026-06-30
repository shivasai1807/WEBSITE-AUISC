import React, { useState, useRef, useEffect } from "react";

// REPLACE THIS STRING WITH YOUR LIVE DEPLOYED WEB APP URL
const BACKEND_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

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
  const [viewStateMode, setViewStateMode] = useState("form"); // Options: "form" or "success"
  const [systemAlertMessage, setSystemAlertMessage] = useState({ visible: false, text: "" });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close custom dropdown safely if clicking anywhere outside the component canvas
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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
    setFormData({ fullName: "", email: "", phone: "", college: "", branch: "", year: "", utr: "" });
    setSelectedFile(null);
    setFileLabel("Click or Drag to upload payment screenshot");
    setSystemAlertMessage({ visible: false, text: "" });
    setViewStateMode("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getDropdownLabelText = () => {
    switch (formData.year) {
      case "1": return "1st Year (Freshman)";
      case "2": return "2nd Year (Sophomore)";
      case "3": return "3rd Year (Junior)";
      case "4": return "4th Year (Senior)";
      default: return "Select Batch Year";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/60 text-slate-800 flex items-center justify-center p-4 md:p-8 antialiased selection:bg-blue-500/10 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* FIXED: Replaced standard HTML comments with valid JSX comment brackets */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] rounded-3xl p-6 md:p-10 overflow-hidden transition-all duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-blue-500/5 to-transparent blur-2xl pointer-events-none rounded-full"></div>

        {viewStateMode === "form" ? (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] uppercase tracking-widest font-extrabold text-blue-600">AUNSF Event Platform</div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Event Access Registration</h1>
              <p className="text-slate-500 text-sm max-w-md mx-auto">Provide your accurate educational profile data and transaction indicators below to secure your entry pass credentials.</p>
            </div>

            {systemAlertMessage.visible && (
              <div className="p-4 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-semibold transition-all duration-300">
                {systemAlertMessage.text}
              </div>
            )}

            <form onSubmit={handleFormSubmissionEvent} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                <input type="text" id="fullName" required value={formData.fullName} onChange={handleTextValueChange} placeholder="Enter full legal name" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleTextValueChange} placeholder="name@domain.com" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                  <input type="tel" id="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleTextValueChange} placeholder="10-digit mobile number" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 space-y-1">
                  <label htmlFor="college" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Institution / College *</label>
                  <input type="text" id="college" required value={formData.college} onChange={handleTextValueChange} placeholder="e.g., ANURAG UNI" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition uppercase" />
                </div>
                {/* FIXED: Replaced standard 'class' syntax attributes with 'className' throughout form rows */}
                <div className="md:col-span-3 space-y-1">
                  <label htmlFor="branch" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Branch *</label>
                  <input type="text" id="branch" required value={formData.branch} onChange={handleTextValueChange} placeholder="e.g., CSE" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition uppercase" />
                </div>

                <div className="md:col-span-4 space-y-1 relative" ref={dropdownRef}>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Academic Cohort Year *</label>
                  <div className="relative w-full">
                    <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center justify-between w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition text-left cursor-pointer min-w-[175px]">
                      <span className={`truncate block max-w-[135px] whitespace-nowrap ${formData.year ? "text-slate-950 font-extrabold" : ""}`}>{getDropdownLabelText()}</span>
                      <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-1 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute left-0 z-50 w-full mt-2 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden py-1 transform scale-100 opacity-100 transition-all duration-200 origin-top">
                        <div onClick={() => handleDropdownSelect("1")} className="px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">1st Year (Freshman)</div>
                        <div onClick={() => handleDropdownSelect("2")} className="px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">2nd Year (Sophomore)</div>
                        <div onClick={() => handleDropdownSelect("3")} className="px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">3rd Year (Junior)</div>
                        <div onClick={() => handleDropdownSelect("4")} className="px-4 py-3 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">4th Year (Senior)</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 my-6" />

              <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-200/60 space-y-4">
                <div className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-1.5 select-none">💳 Audit & Remittance Verification</div>
                <div className="space-y-1">
                  <label htmlFor="utr" className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">UPI / Banking Transaction UTR Reference Number *</label>
                  <input type="text" id="utr" required value={formData.utr} onChange={handleTextValueChange} placeholder="Enter 12-digit UTR verification code" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition uppercase font-mono tracking-wider" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Upload Remittance Receipt Screenshot *</label>
                  <div className="relative flex items-center justify-center bg-white border border-dashed border-slate-200 rounded-xl p-5 hover:border-slate-300 transition cursor-pointer">
                    <input type="file" id="screenshotInput" accept="image/png, image/jpeg, image/jpg" required onChange={handleFileUploadStream} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="text-center space-y-1">
                      <p className="text-xs font-semibold text-slate-500">{fileLabel}</p>
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
          <div className="text-center py-8 space-y-6 opacity-100 transform scale-100 transition-all duration-500">
            <div className="mx-auto w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center shadow-md shadow-emerald-500/5">
              <span className="text-emerald-500 text-2xl font-black">✓</span>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Submission Received Successfully</h2>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest select-none">Secure Transaction Logged</p>
            </div>
            <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200/60 text-left space-y-4 text-xs font-medium leading-relaxed text-slate-600">
              <p>Thank you for completing your application. Your documentation, profile parameters, and UPI transaction reference number logs have been securely written to our registry infrastructure.</p>
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-sm">
                <div className="text-[10px] text-indigo-600 font-black uppercase tracking-wider">Next Step Operations</div>
                <p className="text-slate-500 leading-normal">Our audit committee is verifying your payment. Once cleared, your confirmed entry pass credentials and QR barcode scanner ticket will be automatically dispatched to your email address.</p>
              </div>
            </div>
            <button onClick={triggerStateViewReset} className="mt-4 bg-white hover:bg-slate-50 text-slate-500 font-bold text-xs py-3 px-6 rounded-xl transition border border-slate-200 cursor-pointer shadow-sm">
              ↩ Lodge Another Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;