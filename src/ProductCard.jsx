import React from 'react';

const ProductCard = ({ product, index }) => {
  // Calculate a staggered delay so cards load in a wave
  const delay = `${0.1 + (index * 0.1)}s`;

  return (
    <div 
      className="group bg-white rounded-3xl p-6 flex flex-col justify-between transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 border border-gray-100/50 relative overflow-hidden animate-fade-in-up shadow-lg shadow-gray-200/50"
      style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-300 pr-2">
            {product.name}
          </h3>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gray-50 text-gray-600 border border-gray-100 shrink-0 shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-50 relative z-10 flex items-end justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">Price</p>
          <p className="text-3xl font-black text-gray-900 group-hover:scale-105 origin-left transition-transform duration-300">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
        
        {/* Decorative arrow/action indicator that appears on hover */}
        <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
