import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ParticleBackground from './ParticleBackground';

const products = [
  // Gaming
  { id: 1, name: "Mechanical Keyboard", category: "Gaming", price: 12500 },
  { id: 2, name: "Wireless Gaming Mouse", category: "Gaming", price: 8900 },
  { id: 3, name: "Ultrawide Monitor", category: "Gaming", price: 45000 },
  { id: 4, name: "RGB Mousepad", category: "Gaming", price: 2500 },
  { id: 5, name: "Condenser Microphone", category: "Gaming", price: 15000 },
  { id: 6, name: "VR Headset Pro", category: "Gaming", price: 55000 },
  { id: 7, name: "Ergonomic Chair", category: "Gaming", price: 22000 },
  { id: 8, name: "Streaming Webcam 4K", category: "Gaming", price: 18000 },
  
  // Audio
  { id: 9, name: "Noise Cancelling Headphones", category: "Audio", price: 28000 },
  { id: 10, name: "Bluetooth Soundbar", category: "Audio", price: 14000 },
  { id: 11, name: "Studio Monitors", category: "Audio", price: 32000 },
  { id: 12, name: "True Wireless Earbuds", category: "Audio", price: 12900 },
  { id: 13, name: "Vinyl Record Player", category: "Audio", price: 24000 },
  { id: 14, name: "DAC Amplifier", category: "Audio", price: 9500 },
  { id: 15, name: "Portable Party Speaker", category: "Audio", price: 16500 },

  // Workspace
  { id: 16, name: "Standing Desk", category: "Workspace", price: 35000 },
  { id: 17, name: "Monitor Arm Mount", category: "Workspace", price: 6500 },
  { id: 18, name: "Desk Mat", category: "Workspace", price: 1800 },
  { id: 19, name: "Cable Management Kit", category: "Workspace", price: 1200 },
  { id: 20, name: "LED Desk Lamp", category: "Workspace", price: 3500 },
  { id: 21, name: "USB-C Hub", category: "Workspace", price: 4500 },
  { id: 22, name: "Webcam Privacy Cover", category: "Workspace", price: 500 },

  // Photography
  { id: 23, name: "Mirrorless Camera", category: "Photography", price: 85000 },
  { id: 24, name: "50mm Prime Lens", category: "Photography", price: 18500 },
  { id: 25, name: "Carbon Fiber Tripod", category: "Photography", price: 12000 },
  { id: 26, name: "Camera Backpack", category: "Photography", price: 8500 },
  { id: 27, name: "Ring Light", category: "Photography", price: 3200 },
  { id: 28, name: "SD Card 128GB", category: "Photography", price: 2100 },
  { id: 29, name: "Drone 4k Video", category: "Photography", price: 65000 },

  // Smart Home
  { id: 30, name: "Smart Display Hub", category: "Smart Home", price: 12500 },
  { id: 31, name: "Smart LED Bulbs (4-Pack)", category: "Smart Home", price: 4500 },
  { id: 32, name: "Video Doorbell", category: "Smart Home", price: 16000 },
  { id: 33, name: "Robot Vacuum", category: "Smart Home", price: 28500 },
  { id: 34, name: "Smart Thermostat", category: "Smart Home", price: 19000 },
  { id: 35, name: "Security Camera Indoor", category: "Smart Home", price: 5500 }
];

const categories = ["All", "Gaming", "Audio", "Workspace", "Photography", "Smart Home"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme to HTML element for Tailwind's class-based dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-full bg-white/50 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform shadow-lg"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
          ) : (
            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>

      {/* Interactive Physics Canvas */}
      <ParticleBackground isDarkMode={isDarkMode} />

      {/* Dynamic Aurora Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-40 animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-teal-500/10 dark:bg-teal-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }} />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 animate-fade-in">
        
        {/* Header section */}
        <div className="text-center space-y-4">
          <div className="inline-block animate-glow px-4 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(99,102,241,0.1)] dark:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Explore 35+ Items
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            <span className="block text-gray-900 dark:text-white transition-colors duration-500">
              The Gear
            </span>
            <span className="block text-gradient mt-1 pb-2">
              Collective
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium transition-colors duration-500">
            Discover the best tech, gaming peripherals, and smart home modules.
          </p>
        </div>

        {/* Filters section - Glassmorphism style */}
        <div className="glass-dark rounded-3xl p-6 flex flex-col xl:flex-row gap-6 items-center justify-between animate-fade-in-up border transition-all duration-500">
          
          <div className="w-full xl:w-1/2 relative group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-500 group-focus-within:text-indigo-400 transition-colors duration-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-16 block w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-black/40 py-4 text-gray-900 dark:text-gray-100 focus:bg-white dark:focus:bg-white/5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-inner outline-none placeholder-gray-400 dark:placeholder-gray-500 font-medium text-lg"
            />
          </div>

          {/* Updated this container to be horizontally scrollable always on mobile */}
          <div className="flex w-full xl:w-auto overflow-x-auto gap-3 pb-4 xl:pb-0 px-2 scroll-smooth justify-start xl:justify-end items-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95 border whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-indigo-100 dark:bg-indigo-600/20 text-indigo-700 dark:text-indigo-300 border-indigo-400 dark:border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)] dark:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    : "bg-white/60 dark:bg-black/20 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 hover:text-indigo-600 dark:hover:text-white"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 glass-dark rounded-3xl animate-fade-in-up border transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/10 mb-6 animate-pulse-slow">
                <svg className="h-8 w-8 text-indigo-500 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">No items found</h3>
              <p className="text-lg text-gray-600 dark:text-gray-500 max-w-sm mx-auto transition-colors duration-500">Try adjusting your search query or exploring a different category.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-8 inline-flex items-center px-6 py-3 border border-indigo-300 dark:border-indigo-500/30 font-bold rounded-xl text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300"
               >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
