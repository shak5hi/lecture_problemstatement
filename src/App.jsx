import React, { useState } from 'react';
import ProductCard from './ProductCard';

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark-bg text-gray-100">
      
      {/* Dynamic Aurora Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-float" style={{ animationDelay: '3s', animationDuration: '10s' }} />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 animate-fade-in">
        
        {/* Header section */}
        <div className="text-center space-y-4">
          <div className="inline-block animate-glow px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Explore 35+ Items
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            <span className="block text-white">
              The Gear
            </span>
            <span className="block text-gradient mt-1 pb-2">
              Collective
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-400 font-medium">
            Discover the best tech, gaming peripherals, and smart home modules.
          </p>
        </div>

        {/* Filters section - Dark Glassmorphism style */}
        <div className="glass-dark rounded-3xl p-6 flex flex-col xl:flex-row gap-6 items-center justify-between animate-fade-in-up border border-white/10 shadow-2xl">
          
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
              className="pl-16 block w-full rounded-2xl border border-white/10 bg-black/40 py-4 text-gray-100 focus:bg-white/5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-inner outline-none placeholder-gray-500 font-medium text-lg"
            />
          </div>

          <div className="flex w-full xl:w-auto overflow-x-auto gap-3 pb-2 xl:pb-0 hide-scrollbar justify-start xl:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 transform active:scale-95 border ${
                  selectedCategory === category
                    ? "bg-indigo-600/20 text-indigo-300 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)] glow"
                    : "bg-transparent text-gray-400 border-white/5 hover:bg-white/5 hover:text-white"
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
            <div className="text-center py-24 glass-dark rounded-3xl animate-fade-in-up border border-white/5" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/50 border border-white/10 mb-6 animate-pulse-slow">
                <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
              <p className="text-lg text-gray-500 max-w-sm mx-auto">Try adjusting your search query or exploring a different category.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-8 inline-flex items-center px-6 py-3 border border-indigo-500/30 font-bold rounded-xl text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400 transition-all duration-300"
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
