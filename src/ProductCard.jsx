import React, { useRef, useState } from 'react';

const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Use a max delay to prevent cards far down the list from taking forever to animate in
  const boundedIndex = Math.min(index, 20);
  const delay = `${0.05 + (boundedIndex * 0.05)}s`;

  // Standardized distinct premium colors for normal tech equipment
  const getCategoryColorClass = (category) => {
    switch (category) {
      case 'Gaming': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      case 'Audio': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Workspace': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Photography': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Smart Home': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      default: return 'text-gray-300 bg-white/5 border-white/10';
    }
  };

  const getHoverBorderColor = (category) => {
    switch (category) {
      case 'Gaming': return 'group-hover:border-purple-500/50 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]';
      case 'Audio': return 'group-hover:border-blue-500/50 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]';
      case 'Workspace': return 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]';
      case 'Photography': return 'group-hover:border-amber-500/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]';
      case 'Smart Home': return 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]';
      default: return 'group-hover:border-white/30';
    }
  };

  // 3D Tilt Effect logic
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D rotation map
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      className="perspective-1000 h-full animate-fade-in-up" 
      style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`group relative w-full h-full bg-[#0a0c10] rounded-3xl p-6 flex flex-col justify-between border border-white/5 transition-all duration-200 ease-out flex-1 preserve-3d ${getHoverBorderColor(product.category)}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.03) translateZ(10px)' : 'scale(1) translateZ(0)'}`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-500" />
        
        <div className="relative z-10 translate-z-10">
          <div className="flex flex-col gap-3 items-start mb-6">
            <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-bold tracking-wide border ${getCategoryColorClass(product.category)}`}>
              {product.category}
            </span>
            <h3 className="text-xl font-bold text-white leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
              {product.name}
            </h3>
          </div>
        </div>
        
        <div className="mt-auto pt-5 border-t border-white/5 relative z-10 flex items-center justify-between translate-z-10">
          <div>
            <p className="text-2xl font-black text-white group-hover:scale-105 origin-left transition-transform duration-300">
              <span className="text-sm font-medium text-gray-500 mr-1 relative bottom-[2px]">₹</span>
              {product.price.toLocaleString('en-IN')}
            </p>
          </div>
          
          <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-lg">
             <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
