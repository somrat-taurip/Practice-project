import React from 'react';
import { Award, Users, Globe2, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Quality Products', value: '10,000+' },
    { label: 'Global Brands', value: '250+' },
    { label: 'Customer Rating', value: '4.9 / 5' }
  ];

  return (
    <section id="about" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>ABOUT SHOPEASY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Redefining Online Shopping With Simplicity & Trust
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              At ShopEasy, our mission is to make online shopping effortless, transparent, and enjoyable. Founded with the vision of offering high-grade electronics, fashion essentials, and everyday lifestyle products at reasonable prices, we cut out the middlemen to bring value straight to your doorstep.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="text-2xl font-black text-blue-600">{stat.value}</div>
                  <div className="text-xs font-medium text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&q=80"
                alt="ShopEasy Team and Store"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-bold text-lg">Fast Worldwide Delivery</h4>
                  <p className="text-xs text-slate-200 mt-1">Orders dispatched daily from state-of-the-art warehouses.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
