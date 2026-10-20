import React from 'react';
import { 
  Headphones, 
  Shirt, 
  Armchair, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  HeartHandshake, 
  LayoutGrid,
  Check
} from 'lucide-react';

export default function Categories({ selectedCategory, onSelectCategory }) {
  const categoriesList = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Headphones,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      emoji: '🎧'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Shirt,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      emoji: '👕'
    },
    {
      id: 'home',
      name: 'Home & Kitchen',
      icon: Armchair,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      emoji: '🛋️'
    },
    {
      id: 'beauty',
      name: 'Beauty',
      icon: Sparkles,
      iconColor: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-100',
      emoji: '💄'
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: Trophy,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
      emoji: '🏀'
    },
    {
      id: 'books',
      name: 'Books',
      icon: BookOpen,
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-100',
      emoji: '📘'
    },
    {
      id: 'toys',
      name: 'Toys',
      icon: HeartHandshake,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100',
      emoji: '🧸'
    },
    {
      id: 'all',
      name: 'More',
      icon: LayoutGrid,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      emoji: '✨'
    }
  ];

  return (
    <section id="categories" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Explore Categories</h2>
            <p className="text-sm text-slate-500 mt-1">Browse through our top trending product categories</p>
          </div>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full transition"
            >
              Reset Filter (Show All)
            </button>
          )}
        </div>

        {/* Categories Grid matching 8 items in screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categoriesList.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id === 'all' ? 'all' : cat.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 group text-center cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-500 shadow-md ring-2 ring-blue-500/20 -translate-y-1'
                    : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Visual Icon Box */}
                <div className={`w-14 h-14 rounded-xl ${cat.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-2xl">{cat.emoji}</span>
                </div>

                {/* Category Name */}
                <span className={`text-xs font-semibold tracking-tight transition-colors ${
                  isSelected ? 'text-blue-700 font-bold' : 'text-slate-700 group-hover:text-blue-600'
                }`}>
                  {cat.name}
                </span>

                {/* Active indicator dot */}
                {isSelected && (
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}