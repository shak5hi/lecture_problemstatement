import React, { useRef, useState } from 'react';

const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate staggered entrance delay
  const delay = `${0.05 + (index * 0.05)}s`;

  // Determine accent color per category for varying glow effects
  const getCategoryColorClass = (category) => {
    switch (category) {
      case 'Relics': return 'text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-[0_0_10px_rgba(251,191,36,0.2)]';
      case 'Cybernetics': return 'text-aurora-teal bg-aurora-teal/10 border-aurora-teal/20 shadow-[0_0_10px_rgba(45,212,191,0.2)]';
      case 'Oddities': return 'text-aurora-indigo bg-aurora-indigo/10 border-aurora-indigo/20 shadow-[0_0_10px_rgba(99,102,241,0.2)]';
      case 'Apparel': return 'text-pink-400 bg-pink-400/10 border-pink-400/20 shadow-[0_0_10px_rgba(244,114,182,0.2)]';
      default: return 'text-gray-300 bg-white/5 border-white/10';
    }
  };

  const getHoverBorderColor = (category) => {
    switch (category) {
      case 'Relics': return 'group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]';
      case 'Cybernetics': return 'group-hover:border-aurora-teal/50 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]';
      case 'Oddities': return 'group-hover:border-aurora-indigo/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]';
      case 'Apparel': return 'group-hover:border-pink-500/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]';
      default: return 'group-hover:border-white/30';
    }
  };

  // 3D Tilt Effect logic
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate 10 degrees max
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
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
        className={`group relative w-full h-full bg-dark-card rounded-3xl p-8 flex flex-col justify-between border border-white/5 transition-all duration-300 ease-out flex-1 preserve-3d ${getHoverBorderColor(product.category)}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.02) translateZ(10px)' : 'scale(1) translateZ(0)'}`,
        }}
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-500" />
        
        {/* Subtle background gradient noise or overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />

        <div className="relative z-10 translate-z-10">
          <div className="flex flex-col gap-4 items-start mb-8">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest border ${getCategoryColorClass(product.category)}`}>
              {product.category}
            </span>
            <h3 className="text-2xl font-black text-white leading-tight group-hover:text-gradient transition-all duration-500">
              {product.name}
            </h3>
          </div>
        </div>
        
        <div className="mt-auto pt-6 border-t border-white/5 relative z-10 flex items-center justify-between translate-z-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Acquisition Cost</p>
            <p className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
              <span className="text-sm text-gray-400 mr-1 opacity-50 relative top-[-8px]">₹</span>
              {product.price.toLocaleString('en-IN')}
            </p>
          </div>
          
          {/* Animated cart/view button */}
          <div className="w-12 h-12 rounded-full border border-white/10 bg-black/50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shadow-xl overflow-hidden relative">
             <svg className="w-5 h-5 text-gray-400 group-hover:text-black absolute transition-all duration-300 transform group-hover:-translate-y-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
             <svg className="w-5 h-5 text-black absolute transition-all duration-300 transform translate-y-10 group-hover:translate-y-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
