"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/(dashboard)/admin/lib/firebase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // For animations
import { Loader2, Lock, Mail } from "lucide-react"; // Icons

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (error) {
      alert("Invalid login details");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-blue-900/30 blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 w-full max-w-md px-4"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <div className="mb-8 text-center">
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold tracking-tight text-white"
            >
              Evolvica<span className="text-blue-500">.</span>
            </motion.h1>
            <p className="mt-2 text-sm text-gray-400">AI Automation Control Center</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="admin@evolvica.ai" 
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 pl-10 text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 p-3 pl-10 text-white outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              type="submit" 
              className="relative flex w-full items-center justify-center rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-500 disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign In to Dashboard"}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
              Forgot password? Contact Systems Admin
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}