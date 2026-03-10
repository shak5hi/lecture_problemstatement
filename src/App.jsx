import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Quantum Chronometer", category: "Relics", price: 250000 },
  { id: 2, name: "Neural Link Interface", category: "Cybernetics", price: 850000 },
  { id: 3, name: "Levitating Bonsai", category: "Oddities", price: 15000 },
  { id: 4, name: "Holographic Trench Coat", category: "Apparel", price: 45000 },
  { id: 5, name: "Void-Forged Dagger", category: "Relics", price: 120000 },
  { id: 6, name: "Bionic Optic Sensor", category: "Cybernetics", price: 320000 },
  { id: 7, name: "Crystallized Starlight", category: "Oddities", price: 500000 },
  { id: 8, name: "Phase-Shift Sneakers", category: "Apparel", price: 28000 },
  { id: 9, name: "Memory Engram Storage", category: "Cybernetics", price: 95000 },
  { id: 10, name: "Aether Compass", category: "Relics", price: 75000 },
  { id: 11, name: "Gravity Disruptor", category: "Oddities", price: 210000 },
  { id: 12, name: "Thermoptic Suit", category: "Apparel", price: 650000 }
];

const categories = ["All", "Relics", "Cybernetics", "Oddities", "Apparel"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark-bg text-gray-100">
      
      {/* Dynamic Aurora Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-aurora-indigo/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-aurora-teal/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }} />
      <div className="absolute top-[40%] left-[60%] w-[30rem] h-[30rem] bg-aurora-blue/10 rounded-full mix-blend-screen filter blur-[80px] opacity-50 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in">
        
        {/* Header section */}
        <div className="text-center space-y-6">
          <div className="inline-block animate-glow px-4 py-1 rounded-full border border-aurora-teal/30 bg-aurora-teal/10 text-aurora-teal text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
            Aesthetic Collection v2.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="block text-white">
              The Emporium
            </span>
            <span className="block text-gradient mt-2 pb-2">
              of Curiosities
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light tracking-wide">
            Acquire unique artifacts, advanced cybernetics, and rare apparel from across the galaxy.
          </p>
        </div>

        {/* Filters section - Dark Glassmorphism style */}
        <div className="glass-dark rounded-[2rem] p-6 lg:p-8 flex flex-col xl:flex-row gap-8 items-center justify-between animate-fade-in-up shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
          
          {/* Subtle inner top glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="w-full xl:w-1/2 relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-500 group-focus-within:text-aurora-teal transition-colors duration-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search the archive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-16 block w-full rounded-2xl border border-white/10 bg-black/40 py-5 text-gray-100 focus:bg-black/60 focus:ring-2 focus:ring-aurora-teal focus:border-transparent transition-all duration-500 shadow-inner outline-none placeholder-gray-500 font-medium text-lg"
            />
          </div>

          <div className="flex w-full xl:w-auto overflow-x-auto gap-4 pb-2 xl:pb-0 hide-scrollbar justify-start xl:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-8 py-4 rounded-2xl text-sm font-bold tracking-wider uppercase transition-all duration-500 transform active:scale-95 border ${
                  selectedCategory === category
                    ? "bg-white/10 text-white border-aurora-teal shadow-[0_0_20px_rgba(45,212,191,0.3)] glow"
                    : "bg-transparent text-gray-400 border-white/5 hover:bg-white/5 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 glass-dark rounded-[3rem] animate-fade-in-up border border-white/5" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-black border border-white/10 mb-8 animate-pulse-slow shadow-[0_0_30px_rgba(0,0,0,0.8)_inset]">
                <svg className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">No artifacts found</h3>
              <p className="text-xl text-gray-500 max-w-md mx-auto font-light">The archive doesn't contain what you're looking for. Try a different query.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-10 inline-flex items-center px-8 py-4 border border-aurora-teal/30 text-sm tracking-widest uppercase font-bold rounded-xl text-aurora-teal bg-aurora-teal/5 hover:bg-aurora-teal/10 hover:border-aurora-teal hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-500"
               >
                Reset Scanners
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
