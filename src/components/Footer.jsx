import React from 'react';
import { FaShoppingBag, FaFacebook,FaTwitter, FaInstagram, FaYoutube, FaCreditCard, FaShieldAlt } from  "react-icons/fa";

export default function Footer({ onNavigate, onSelectCategory }) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="#home"
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <FaShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Shop<span className="text-blue-500">Easy</span>
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-wider">
                  Online Store
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your one-stop destination for authentic electronics, everyday apparel, smart accessories, and home gadgets at guaranteed best prices.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition" aria-label="Facebook">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-400 text-slate-300 hover:text-white flex items-center justify-center transition" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition" aria-label="YouTube">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" onClick={() => onNavigate('home')} className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" onClick={() => onNavigate('shop')} className="hover:text-blue-400 transition">
                  Shop Catalog
                </a>
              </li>
              <li>
                <a href="#categories" onClick={() => onNavigate('categories')} className="hover:text-blue-400 transition">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#deals" onClick={() => onNavigate('deals')} className="hover:text-blue-400 transition">
                  Flash Deals
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => onNavigate('about')} className="hover:text-blue-400 transition">
                  About ShopEasy
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">Categories</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#shop" 
                  onClick={() => onSelectCategory('electronics')} 
                  className="hover:text-blue-400 transition"
                >
                  Electronics & Gadgets
                </a>
              </li>
              <li>
                <a 
                  href="#shop" 
                  onClick={() => onSelectCategory('fashion')} 
                  className="hover:text-blue-400 transition"
                >
                  Fashion & Apparel
                </a>
              </li>
              <li>
                <a 
                  href="#shop" 
                  onClick={() => onSelectCategory('home')} 
                  className="hover:text-blue-400 transition"
                >
                  Home & Living
                </a>
              </li>
              <li>
                <a 
                  href="#shop" 
                  onClick={() => onSelectCategory('beauty')} 
                  className="hover:text-blue-400 transition"
                >
                  Beauty & Personal Care
                </a>
              </li>
              <li>
                <a 
                  href="#shop" 
                  onClick={() => onSelectCategory('sports')} 
                  className="hover:text-blue-400 transition"
                >
                  Sports & Fitness
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">Customer Service</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#contact" className="hover:text-blue-400 transition">Track Your Order</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Returns & Exchanges</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Shipping Rates & Policies</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Help Center & FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ShopEasy Inc. All rights reserved.
          </div>

          {/* Accepted Payments */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 mr-1">Guaranteed Safe Checkout:</span>
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="font-bold text-slate-300 text-[10px]">VISA</span>
              <span className="text-slate-600">•</span>
              <span className="font-bold text-slate-300 text-[10px]">Mastercard</span>
              <span className="text-slate-600">•</span>
              <span className="font-bold text-slate-300 text-[10px]">PayPal</span>
              <span className="text-slate-600">•</span>
              <span className="font-bold text-slate-300 text-[10px]">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}