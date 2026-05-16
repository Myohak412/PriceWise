import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, TrendingDown, Sparkles, ArrowRight, Tag, Percent } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/dashboard', { state: { initialSearch: searchQuery.trim() } });
    }
  };

  const trendingDeals = [
    { name: 'Sony WH-1000XM5', oldPrice: 399, newPrice: 298, save: 101, store: 'Amazon' },
    { name: 'iPad Air M2', oldPrice: 599, newPrice: 549, save: 50, store: 'Walmart' },
    { name: 'Logitech MX Master 3S', oldPrice: 99, newPrice: 79, save: 20, store: 'eBay' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Banner */}
      <div className="bg-emerald-600 text-white text-xs font-bold py-2.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Percent size={14} /> Compare real-time prices across Amazon, Walmart, and eBay instantly.
      </div>

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-600 p-2 rounded-xl shadow-md shadow-emerald-600/20">
            <ShoppingCart className="text-white" size={20} />
          </div>
          <span className="font-black text-2xl tracking-tight text-slate-900">PriceWise</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-sm">
            Join Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-bold text-xs px-4 py-1.5 rounded-full mb-6">
          <Sparkles size={14} className="animate-pulse" /> Stop Overpaying Online
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          One Search. <br />
          <span className="text-emerald-600 italic bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Every Real Deal.</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed mb-10">
          Paste a product name or model. We scan major e-commerce platforms live to save you up to 20% on every order.
        </p>

        {/* Search Input Framework */}
        <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto relative group mb-16">
          <div className="absolute inset-0 bg-emerald-600/10 blur-2xl group-focus-within:bg-emerald-600/20 transition-all rounded-full"></div>
          <div className="relative flex items-center">
            <Search className="absolute left-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors" size={22} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product (e.g., Sony WH-1000XM5)..." 
              className="w-full py-5 pl-14 pr-36 bg-white border-2 border-slate-200/80 rounded-2xl text-base font-semibold outline-none focus:border-emerald-500 transition-all shadow-md"
            />
            <button type="submit" className="absolute right-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors flex items-center gap-1.5 shadow-sm">
              Find Deals <ArrowRight size={16} />
            </button>
          </div>
        </form>

        {/* Live Trending Widget */}
        <div className="max-w-3xl mx-auto text-left">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <TrendingDown size={16} className="text-emerald-600" /> Active Community Savings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trendingDeals.map((deal, idx) => (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-emerald-200 transition-all cursor-pointer" 
                onClick={() => {
                  setSearchQuery(deal.name);
                  navigate('/dashboard', { state: { initialSearch: deal.name } });
                }}
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className="font-bold text-sm text-slate-800 truncate">{deal.name}</h4>
                    <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500 shrink-0">{deal.store}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg font-black text-slate-900">${deal.newPrice}</span>
                    <span className="text-xs text-slate-400 line-through">${deal.oldPrice}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-50 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <Tag size={12} /> Save ${deal.save} right now
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}