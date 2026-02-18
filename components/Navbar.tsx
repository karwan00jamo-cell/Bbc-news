
import React from 'react';
import { CATEGORIES } from '../constants';

interface NavbarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="bg-[#bb1919] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onCategoryChange('Home')}>
            <div className="flex gap-0.5">
              <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-[#bb1919] text-xl">B</div>
              <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-[#bb1919] text-xl">E</div>
              <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-[#bb1919] text-xl">A</div>
            </div>
            <span className="text-white font-bold text-2xl ml-2 tracking-tight">BEACON NEWS</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white text-sm font-semibold uppercase tracking-wider">
            <button className="hover:underline">Sign In</button>
            <button className="hover:underline">Home</button>
            <button className="hover:underline">News</button>
            <button className="hover:underline">Sport</button>
            <button className="hover:underline">Weather</button>
            <button className="hover:underline">Shop</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <ul className="flex space-x-8 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className={`transition-colors duration-200 hover:text-[#bb1919] ${
                  activeCategory === cat ? 'text-[#bb1919] border-b-2 border-[#bb1919] pb-4 -mb-4' : ''
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
