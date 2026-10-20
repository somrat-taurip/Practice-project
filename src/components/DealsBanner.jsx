import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function DealsBanner({ onShopNow }) {
  // Countdown timer calculation (e.g. 18 hours, 45 minutes, 30 seconds remaining)
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deals" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16">
          
          {/* Ambient decorative background circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>LIMITED TIME OFFER</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Summer Flash Sale <br />
                <span className="text-amber-300">Up to 50% Off</span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 max-w-lg leading-relaxed">
                Take advantage of exclusive discounts across premium electronics, modern fashion, and home accessories. Stock is limited!
              </p>

              {/* Live Countdown Timer */}
              <div className="flex items-center gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-amber-300" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-100">
                    Ends In:
                  </span>
                </div>

                <div className="flex items-center gap-2 text-center font-mono">
                  <div className="bg-slate-900/60 backdrop-blur-xs border border-white/15 rounded-xl px-3 py-2 min-w-[50px]">
                    <span className="block text-xl sm:text-2xl font-bold text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans">Hours</span>
                  </div>
                  <span className="text-xl font-bold text-blue-200">:</span>
                  <div className="bg-slate-900/60 backdrop-blur-xs border border-white/15 rounded-xl px-3 py-2 min-w-[50px]">
                    <span className="block text-xl sm:text-2xl font-bold text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans">Mins</span>
                  </div>
                  <span className="text-xl font-bold text-blue-200">:</span>
                  <div className="bg-slate-900/60 backdrop-blur-xs border border-white/15 rounded-xl px-3 py-2 min-w-[50px]">
                    <span className="block text-xl sm:text-2xl font-bold text-amber-300">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans">Secs</span>
                  </div>
                </div>
              </div>

              {/* Call to action button */}
              <div className="pt-2">
                <a
                  href="#shop"
                  onClick={onShopNow}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold text-sm sm:text-base hover:bg-amber-300 hover:text-slate-950 transition-all shadow-lg shadow-black/20 group cursor-pointer"
                >
                  <span>Claim Deals Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Promo Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center shadow-xl">
                <span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-xs font-black rounded-full mb-3 uppercase tracking-wider">
                  HOTTEST SELLER
                </span>
                <div className="w-40 h-40 mx-auto my-2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80"
                    alt="Deal Product"
                    className="w-full h-full object-contain filter drop-shadow-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mt-2">Smart Watch Series 8</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-2xl font-black text-amber-300">$199.99</span>
                  <span className="text-sm text-blue-200 line-through">$249.99</span>
                </div>
                <p className="text-xs text-blue-100 mt-2">Use code <span className="font-mono font-bold bg-white/20 px-2 py-0.5 rounded text-white">EASY50</span> at checkout</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}