import React from 'react';
import { Link } from 'react-router-dom';

// Notice the "export default function" right here:
export default function Dashboard({ greeting }) {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-8">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            {greeting || "Welcome"}, Agent
          </p>
          <h1 className="text-3xl font-black text-slate-900">PriceWise Core</h1>
        </div>
        <Link to="/" className="px-4 py-2 bg-slate-200 text-slate-700 font-bold rounded-xl text-sm hover:bg-slate-300 transition-colors">
          Logout
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-center">
        <p className="text-slate-500 font-medium">Your smart shopping database is active and ready.</p>
      </div>
    </div>
  );
}