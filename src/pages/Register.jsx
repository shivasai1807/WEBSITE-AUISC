import React, { useState } from "react";

// REPLACE THIS STRING WITH YOUR LIVE DEPLOYED WEB APP URL
const BACKEND_URL = "https://script.google.com/macros/s/AKfycby5bz0GI20VxLh_FQOESgzX9V1N54KaPxHuDKlSZT_uu7rswK8QfU0gbxW4k3BSCfqpXQ/exec";

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
  const [fileLabel, setFileLabel] = useState("Click to upload payment screenshot");
  const [submittingState, setSubmittingState] = useState(false);
  const [viewStateMode, setViewStateMode] = useState("form"); // "form" or "success"
  const [systemAlertMessage, setSystemAlertMessage] = useState({ visible: false, text: "" });

  const handleTextValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileUploadStream = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setSystemAlertMessage({ visible: true, text: "File bounds exceeded: Selection is larger than 4MB ceiling footprint." });
        e.target.value = null;
        setSelectedFile(null);
        setFileLabel("Click to upload payment screenshot");
        return;
      }
      setSelectedFile(file);
      setFileLabel(`📎 Selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
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

    if (!selectedFile) {
      setSystemAlertMessage({ visible: true, text: "Operation stopped: Payment receipt screenshot data is required." });
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
      setSystemAlertMessage({ visible: true, text: "Infrastructure Communication Timeout Exception. Try again." });
    } finally {
      setSubmittingState(false);
    }
  };

  const triggerStateViewReset = () => {
    setFormData({ fullName: "", email: "", phone: "", college: "", branch: "", year: "", utr: "" });
    setSelectedFile(null);
    setFileLabel("Click to upload payment screenshot");
    setSystemAlertMessage({ visible: false, text: "" });
    setViewStateMode("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 flex items-center justify-center p-4 md:p-8 antialiased selection:bg-blue-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="relative w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-2xl p-6 md:p-10 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-blue-500/10 to-transparent blur-2xl pointer-events-none rounded-full"></div>

        {viewStateMode === "form" ? (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[11px] uppercase tracking-widest font-black text-blue-400">AUNSF Event Platform</div>
              <h1 class="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">Event Access Registration</h1>
              <p className="text-slate-400 text-sm max-w-md mx-auto">Provide your accurate profile data and transaction indicators below to secure your event credentials.</p>
            </div>

            {systemAlertMessage.visible && (
              <div className="p-4 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-xl text-xs font-semibold">
                {systemAlertMessage.text}
              </div>
            )}

            <form onSubmit={handleFormSubmissionEvent} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-xs font-black text-slate-400 uppercase tracking-wider">Full Name</label>
                <input type="text" id="fullName" required value={formData.fullName} onChange={handleTextValueChange} placeholder="Enter full legal name" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label htmlFor="email" className="block text-xs font-black text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleTextValueChange} placeholder="name@domain.com" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition" />
                </div>
                <div class="space-y-1">
                  <label htmlFor="phone" className="block text-xs font-black text-slate-400 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleTextValueChange} placeholder="10-digit mobile number" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="space-y-1">
                  <label htmlFor="college" className="block text-xs font-black text-slate-400 uppercase tracking-wider">Institution / College</label>
                  <input type="text" id="college" required value={formData.college} onChange={handleTextValueChange} placeholder="e.g., ANURAG UNI" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition uppercase" />
                </div>
                <div class="space-y-1">
                  <label htmlFor="branch" className="block text-xs font-black text-slate-400 uppercase tracking-wider">Specialization / Branch</label>
                  <input type="text" id="branch" required value={formData.branch} onChange={handleTextValueChange} placeholder="e.g., CSE" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition uppercase" />
                </div>
                <div class="space-y-1">
                  <label htmlFor="year" className="block text-xs font-black text-slate-400 uppercase tracking-wider">Academic Year</label>
                  <select id="year" required value={formData.year} onChange={handleTextValueChange} className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition cursor-pointer">
                    <option value="" disabled>Select Batch Year</option>
                    <option value="1">1st Year (Freshman)</option>
                    <option value="2">2nd Year (Sophomore)</option>
                    <option value="3">3rd Year (Junior)</option>
                    <option value="4">4th Year (Senior)</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-950/30 p-5 rounded-2xl border border-slate-800/80 space-y-4">
                <div className="text-xs font-black text-purple-400 uppercase tracking-widest">💳 Audit & Remittance Verification</div>
                <div class="space-y-1">
                  <label htmlFor="utr" className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">UPI / Banking Transaction UTR Reference Number</label>
                  <input type="text" id="utr" required value={formData.utr} onChange={handleTextValueChange} placeholder="Enter 12-digit UTR verification code" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition uppercase font-mono tracking-wider" />
                </div>
                <div class="space-y-1.5">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">Upload Remittance Receipt Screenshot</label>
                  <div className="relative flex items-center justify-center bg-slate-950 border border-dashed border-slate-800 rounded-xl p-4 hover:border-slate-700 transition cursor-pointer">
                    <input type="file" id="screenshotInput" accept="image/png, image/jpeg, image/jpg" required onChange={handleFileUploadStream} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="text-center space-y-1">
                      <p className="text-xs font-semibold text-slate-400">{fileLabel}</p>
                      <p className="text-[10px] text-slate-600 uppercase tracking-wide">PNG, JPG, or JPEG up to 4MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={submittingState} class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-4 px-6 rounded-xl shadow-xl shadow-blue-600/10 hover:shadow-blue-500/20 transition duration-200 tracking-wide cursor-pointer flex items-center justify-center gap-2">
                <span>{submittingState ? "Encrypting Assets & Syncing Ledger..." : "Submit Registration Portfolio"}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="mx-auto w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <span class="text-emerald-400 text-2xl font-black">✓</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tight text-slate-100">Portfolio Lodged Successfully</h2>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Secure Transaction Pipeline Active</p>
            </div>
            <div className="max-w-md mx-auto bg-slate-950/50 rounded-2xl p-6 border border-slate-800 text-left space-y-4 text-sm leading-relaxed text-slate-300">
              <p>Thank you for submitting your entry. Your registration portfolio, academic credentials, and UPI transaction logs have been securely written to our primary data ledger infrastructure.</p>
              <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <div class="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Next Step Operations</div>
                <p class="text-xs text-slate-400">Our audit committee will verify your payment details shortly. Once approved, your custom entry credentials, reporting guidelines, and **QR Ticket Pass** will be sent automatically to your verified email inbox.</p>
              </div>
            </div>
            <button onClick={triggerStateViewReset} className="mt-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs py-3 px-6 rounded-xl transition border border-slate-700/50 cursor-pointer">
              ↩ Lodge Another Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;