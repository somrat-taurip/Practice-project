import React from 'react';
import { Truck, Headphones } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0f172a] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Free delivery notice */}
        <div className="flex items-center gap-2 text-slate-300 hover:text-white transition">
          <Truck className="w-3.5 h-3.5 text-blue-400" />
          <span>Free Delivery on orders over $50</span>
        </div>

        {/* Center: Welcome message */}
        <div className="hidden md:block text-slate-400">
          <span>Welcome to ShopEasy Online Store</span>
        </div>

        {/* Right: Customer support hotline */}
        <div className="flex items-center gap-2 text-slate-300 hover:text-white transition">
          <Headphones className="w-3.5 h-3.5 text-blue-400" />
          <span>Need help? <a href="tel:+1234567890" className="font-semibold text-white hover:text-blue-400 ml-1">+1 234 567 890</a></span>
        </div>
      </div>
    </div>
  );
}
