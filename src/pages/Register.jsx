import React, { useState } from "react";
import { motion } from "framer-motion";

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
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [btnText, setBtnText] = useState("Submit Registration");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 4 * 1024 * 1024) {
      alert("File size is too large! Please upload a screenshot under 4MB.");
      e.target.value = null; // reset input
      setFile(null);
      return;
    }
    setFile(selectedFile);
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload the payment screenshot.");
      return;
    }

    setSubmitting(true);
    setBtnText("Processing Details & Uploading...");

    try {
      const base64Image = await toBase64(file);

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        branch: formData.branch,
        year: formData.year,
        utr: formData.utr,
        imageBase64: base64Image,
        imageType: file.type,
      };

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Registration submitted successfully! Your submission is pending payment verification.");
        
        // Reset state
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          branch: "",
          year: "",
          utr: "",
        });
        setFile(null);

        const fileInput = document.getElementById("screenshotInput");
        if (fileInput) fileInput.value = "";
      } else {
        alert("Submission Blocked: " + result.message);
      }

    } catch (error) {
      console.error("Transmission Error:", error);
      alert("Network Error: If you are encountering errors or resubmitting a corrected entry, do not create a new form. Please contact the organizing committee.");
    } finally {
      setSubmitting(false);
      setBtnText("Submit Registration");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden pt-28 pb-20 flex items-center justify-center p-4 md:p-8 text-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-6 md:p-10 border border-slate-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Event Registration</h1>
          <p className="text-slate-500 mt-2">Please complete the form below to secure your spot.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@college.edu"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="college" className="block text-sm font-semibold text-slate-700 mb-1">
                College *
              </label>
              <input
                type="text"
                id="college"
                required
                value={formData.college}
                onChange={handleChange}
                placeholder="Engineering College"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="branch" className="block text-sm font-semibold text-slate-700 mb-1">
                Branch *
              </label>
              <input
                type="text"
                id="branch"
                required
                value={formData.branch}
                onChange={handleChange}
                placeholder="CSE, ECE, etc."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-slate-700 mb-1">
                Year *
              </label>
              <select
                id="year"
                required
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              >
                <option value="" disabled>
                  Select Year
                </option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
          </div>

          <hr className="border-slate-100 my-6" />

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Payment Details</h3>

            <div>
              <label htmlFor="utr" className="block text-sm font-semibold text-slate-700 mb-1">
                UTR / Ref Number *
              </label>
              <input
                type="text"
                id="utr"
                required
                value={formData.utr}
                onChange={handleChange}
                placeholder="Enter 12-digit UTR Ref No."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Upload Payment Screenshot *</label>
              <input
                type="file"
                id="screenshotInput"
                accept="image/png, image/jpeg, image/jpg"
                required
                onChange={handleFileChange}
                className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
              <p className="text-xs text-slate-400 mt-1">Accepts PNG, JPG, or JPEG up to 4MB.</p>
            </div>
          </div>

          <button
            type="submit"
            id="submitBtn"
            disabled={submitting}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center cursor-pointer ${
              submitting ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            <span>{btnText}</span>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
