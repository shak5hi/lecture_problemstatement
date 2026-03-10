import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 break-words">{product.name}</h3>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 shrink-0 ml-3">
            {product.category}
          </span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-2xl font-extrabold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
