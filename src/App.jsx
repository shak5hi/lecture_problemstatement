import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

const categories = ["All", "Electronics", "Clothing", "Home"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative background shapes for creativity */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10 animate-fade-in">
        
        {/* Header section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Discover
            </span>
            <span className="block text-gray-900 mt-1">Exceptional Goods</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl text-gray-500 font-medium">
            Find exactly what you're looking for with our beautifully designed catalog.
          </p>
        </div>

        {/* Filters section - Glassmorphism style */}
        <div className="glass rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center justify-between animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 block w-full rounded-2xl border-transparent bg-white/50 py-4 text-gray-900 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm outline-none placeholder-gray-400 font-medium"
            />
          </div>

          <div className="flex w-full md:w-auto overflow-x-auto gap-3 pb-2 md:pb-0 hide-scrollbar justify-start md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/60 text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-md border border-white/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 glass rounded-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 mb-6 animate-pulse">
                <svg className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-lg text-gray-500 max-w-sm mx-auto">We couldn't find anything matching your search. Try adjusting your filters.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-purple-700 bg-purple-100 hover:bg-purple-200 hover:scale-105 transition-all duration-300"
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
