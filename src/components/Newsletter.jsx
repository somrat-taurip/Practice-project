import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    if (onShowToast) onShowToast('Subscribed! Use code WELCOME10 for 10% off your first order.');
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-14 bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>JOIN OUR NEWSLETTER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Get $10 Off Your First Order
          </h2>

          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Subscribe to our weekly digest for early access to drops, secret discount vouchers, and member-only promotions.
          </p>

          {subscribed ? (
            <div className="pt-4 flex items-center justify-center gap-2 text-emerald-400 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5" />
              <span>You are subscribed! Coupon code: <strong>WELCOME10</strong></span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="pt-3 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:bg-white/15 focus:border-blue-400 transition"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 pt-1">
            We value your privacy. Unsubscribe at any time with one click.
          </p>
        </div>
      </div>
    </section>
  );
}