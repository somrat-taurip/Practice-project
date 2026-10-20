import React from 'react';
import { Truck, Headphones, ShieldCheck, BadgePercent } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: "We're here to help"
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: '100% secure checkout'
    },
    {
      icon: BadgePercent,
      title: 'Best Prices',
      description: 'Guaranteed best prices'
    }
  ];

  return (
    <section className="py-8 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}