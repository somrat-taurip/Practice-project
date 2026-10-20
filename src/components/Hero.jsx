import React from 'react';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Sparkles } from 'lucide-react';

export default function Hero({ onShopNow, onExploreDeals }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      
      {/* Background ambient decorative blurs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            
            {/* New Arrivals Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>NEW ARRIVALS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Shop More, Save More <br />
              <span className="text-slate-900">Only at </span>
              <span className="text-blue-600">ShopEasy</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Discover a wide range of quality products at the best prices. Fast delivery, secure payments, and easy returns.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop"
                onClick={onShopNow}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm sm:text-base hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/25 group cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#deals"
                onClick={onExploreDeals}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 active:scale-95 transition-all shadow-xs cursor-pointer"
              >
                Explore Deals
              </a>
            </div>

            {/* Trust Badges Strip (Under buttons matching screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Secure Payment</h4>
                  <p className="text-[11px] text-slate-500">100% protected</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Fast Delivery</h4>
                  <p className="text-[11px] text-slate-500">On time delivery</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <RotateCcw className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Easy Returns</h4>
                  <p className="text-[11px] text-slate-500">30-day returns</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Device Showcase matching Screenshot (Laptop + Phone + Plant) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-xl mx-auto flex items-end justify-center select-none">
              
              {/* --- Laptop Device Mockup --- */}
              <div className="relative w-[85%] sm:w-[80%] z-10 filter drop-shadow-2xl">
                {/* Laptop Screen Frame */}
                <div className="bg-slate-900 rounded-t-2xl p-2.5 sm:p-3 shadow-inner border border-slate-700">
                  {/* Laptop Web Camera dot */}
                  <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-600 mx-auto mb-1.5" />
                  
                  {/* Laptop Display Screen Content */}
                  <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-left text-xs aspect-[16/10] flex flex-col justify-between shadow-xs">
                    
                    {/* Mini Browser Header */}
                    <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-rose-400" />
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="ml-2 font-bold text-slate-800 text-[11px] flex items-center gap-1">
                          <span className="w-2 h-2 rounded-xs bg-blue-600 inline-block" /> ShopEasy
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 text-slate-500 text-[9px]">
                        <span className="text-blue-600 font-semibold">Home</span>
                        <span>Shop</span>
                        <span>Categories</span>
                        <span>Deals</span>
                        <span>About</span>
                      </div>
                    </div>

                    {/* Mini Hero Banner inside Laptop */}
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-orange-50/60 flex items-center justify-between flex-1">
                      <div className="space-y-1 sm:space-y-1.5 max-w-[55%]">
                        <span className="text-[8px] sm:text-[9px] font-bold text-blue-600 tracking-wider uppercase">NEW ARRIVALS</span>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                          Summer Sale <br />
                          <span className="text-blue-600">Up to 50% Off</span>
                        </h3>
                        <p className="text-[8px] text-slate-500 line-clamp-1">Best deals on top brands</p>
                        <button className="px-2.5 py-1 bg-blue-600 text-white rounded text-[9px] font-semibold hover:bg-blue-700 transition">
                          Shop Now
                        </button>
                      </div>

                      {/* Mini Product Feature Image */}
                      <div className="relative w-20 sm:w-28 h-20 sm:h-24 shrink-0 flex items-center justify-center">
                        <img 
                          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80" 
                          alt="Laptop Backpack" 
                          className="w-full h-full object-contain filter drop-shadow-md"
                        />
                      </div>
                    </div>

                    {/* Mini Category Row inside Laptop */}
                    <div className="bg-white border-t border-slate-100 p-2">
                      <div className="text-[9px] font-bold text-slate-700 mb-1">Shop by Category</div>
                      <div className="grid grid-cols-6 gap-1 text-center">
                        {['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books'].map((cat, i) => (
                          <div key={i} className="bg-slate-50 rounded p-1 hover:bg-blue-50 transition cursor-pointer">
                            <div className="text-[7px] text-slate-600 truncate">{cat}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Laptop Base / Keyboard Hinge */}
                <div className="relative mx-auto bg-slate-300 h-2.5 sm:h-3.5 rounded-b-xl border-t border-slate-400 shadow-md">
                  <div className="w-16 h-1 bg-slate-400 rounded-full mx-auto" />
                </div>
              </div>

              {/* --- Smartphone Device Mockup (Overlapping right) --- */}
              <div className="absolute right-2 sm:right-6 -bottom-3 w-[36%] sm:w-[32%] z-20 filter drop-shadow-2xl">
                <div className="bg-slate-900 rounded-[28px] sm:rounded-[36px] p-2 border-2 border-slate-700 shadow-2xl">
                  {/* Dynamic Island / Speaker */}
                  <div className="w-12 sm:w-16 h-3 bg-slate-800 rounded-full mx-auto mb-1 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                  </div>

                  {/* Phone Screen Display */}
                  <div className="bg-white rounded-[22px] sm:rounded-[28px] overflow-hidden text-left p-2.5 aspect-[9/17] flex flex-col justify-between border border-slate-200">
                    {/* Phone Top Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 text-[9px]">
                      <span className="font-bold text-slate-800 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> ShopEasy
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-[10px]">
                        <span>🔍</span>
                        <span>🛒</span>
                      </div>
                    </div>

                    {/* Phone Hero Promo Banner */}
                    <div className="bg-blue-50/80 rounded-xl p-2 my-1.5 border border-blue-100/60">
                      <span className="text-[7px] font-bold text-blue-600 uppercase">NEW ARRIVALS</span>
                      <h4 className="text-[10px] font-extrabold text-slate-900 leading-tight">
                        Big Deals <br />On Top Brands
                      </h4>
                      <div className="w-14 h-14 mx-auto my-1">
                        <img 
                          src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&q=80" 
                          alt="Smart Watch" 
                          className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                      </div>
                      <button className="w-full py-1 bg-blue-600 text-white rounded text-[8px] font-semibold text-center">
                        Shop Now
                      </button>
                    </div>

                    {/* Phone Mini Categories Grid */}
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-slate-700">Categories</span>
                      <div className="grid grid-cols-3 gap-1 text-[7px] text-center">
                        <div className="bg-slate-50 p-1 rounded font-medium text-slate-700">Electronics</div>
                        <div className="bg-slate-50 p-1 rounded font-medium text-slate-700">Fashion</div>
                        <div className="bg-slate-50 p-1 rounded font-medium text-slate-700">Home</div>
                        <div className="bg-slate-50 p-1 rounded font-medium text-slate-700">Beauty</div>
                        <div className="bg-slate-50 p-1 rounded font-medium text-slate-700">Sports</div>
                        <div className="bg-slate-50 p-1 rounded font-medium text-slate-700">More</div>
                      </div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="w-10 h-0.5 bg-slate-300 rounded-full mx-auto mt-1" />
                  </div>
                </div>
              </div>

              {/* --- Potted Green Plant on Table (Matching Screenshot Right Corner) --- */}
              <div className="hidden sm:block absolute -right-6 bottom-0 z-30 pointer-events-none">
                <div className="relative w-16 h-24 flex flex-col items-center justify-end">
                  {/* Leaves */}
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <span className="text-3xl filter drop-shadow-sm transform -rotate-12">🪴</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
