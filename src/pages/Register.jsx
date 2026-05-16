import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Mail, Lock, User, Eye, EyeOff, CheckSquare } from 'lucide-react';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      {/* Branding */}
      <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate('/')}>
        <div className="bg-emerald-600 p-2 rounded-xl text-white">
          <ShoppingCart size={18} />
        </div>
        <span className="font-black text-xl tracking-tight text-slate-900">PriceWise</span>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Create Watcher Profile</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1.5">Initialize Savings Tracker</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-semibold outline-none focus:border-emerald-500 focus:bg-white transition-all" 
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-sm font-semibold outline-none focus:border-emerald-500 focus:bg-white transition-all" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              required
              type={showPassword ? 'text' : 'password'} 
              placeholder="Create Strong Password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-12 py-3.5 text-sm font-semibold outline-none focus:border-emerald-500 focus:bg-white transition-all" 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input required type="checkbox" id="terms" className="mt-1 accent-emerald-600 rounded cursor-pointer" />
            <label htmlFor="terms" className="text-xs text-slate-400 font-medium leading-relaxed select-none cursor-pointer">
              I agree to the PriceWise tracking agreement and data transparency rules.
            </label>
          </div>

          <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm uppercase tracking-widest shadow-md shadow-emerald-600/10 transition-all active:scale-[0.98]">
            Initialize Account
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-slate-500 mt-6 font-medium">
        Already saving with us?{' '}
        <Link to="/login" className="text-emerald-600 font-bold underline underline-offset-4">
          Log In
        </Link>
      </p>
    </div>
  );
}