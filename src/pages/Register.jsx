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
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-xl mx-auto text-center bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
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