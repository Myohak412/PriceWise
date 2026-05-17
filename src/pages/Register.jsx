import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ShoppingCart, UserPlus, Mail, Lock, AlertCircle } from 'lucide-react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Form Validation Checks
    if (password !== confirmPassword) {
      return setErrorMsg('Passwords do not match!');
    }
    if (password.length < 6) {
      return setErrorMsg('Password should be at least 6 characters long.');
    }

    setLoading(true);
    try {
      // Firebase Authentication creation pipeline
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect straight to dashboard upon successful registration hook
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setErrorMsg('This email is already registered.');
      } else {
        setErrorMsg('Failed to create an account. Try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-slate-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex bg-emerald-600 p-2.5 rounded-xl shadow-md text-white mb-4">
          <ShoppingCart size={24} />
        </div>
        <h2 className="text-3xl font-black tracking-tight text-slate-900">Create your account</h2>
        <p className="mt-2 text-sm text-slate-500 font-medium">
          Join PriceWise to start tracking regional prices
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-slate-100 sm:rounded-2xl sm:px-10">
          
          {errorMsg && (
            <div className="mb-4 p-3.5 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs font-semibold flex items-center gap-2">
              <AlertCircle size={16} /> {errorMsg}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleRegister}>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full p-3.5 pl-11 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail className="absolute left-3.5 top-4 text-slate-400" size={16} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full p-3.5 pl-11 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock className="absolute left-3.5 top-4 text-slate-400" size={16} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full p-3.5 pl-11 bg-slate-50/50 border border-slate-200 rounded-xl text-sm font-semibold outline-none focus:border-emerald-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Lock className="absolute left-3.5 top-4 text-slate-400" size={16} />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating Node account...' : 'Sign Up'} <UserPlus size={16} />
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}