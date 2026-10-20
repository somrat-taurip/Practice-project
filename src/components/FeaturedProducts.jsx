import React, { useState } from 'react';
import { Star, Heart, Eye, ShoppingCart, Check, ArrowRight } from 'lucide-react';

export default function FeaturedProducts({
  products,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  selectedCategory,
  onSelectCategory,
  searchTerm
}) {
  const [showAll, setShowAll] = useState(false);
  const [addedItemMap, setAddedItemMap] = useState({});

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = !searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

  const handleAddToCartClick = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="shop" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full inline-block" />
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Featured Products
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-1.5">
              Handpicked selections with our highest customer satisfaction ratings
            </p>
          </div>

          <div className="flex items-center gap-3">
            {searchTerm && (
              <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                Search: "{searchTerm}"
              </span>
            )}
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition group cursor-pointer"
            >
              <span>{showAll ? 'Show Less' : 'View All'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-base font-semibold text-slate-700">No products found</p>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search or category filter</p>
            <button
              onClick={() => {
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              const isAdded = !!addedItemMap[product.id];
              const discountPercent = Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              );

              return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Container */}
                  <div className="relative bg-slate-50 p-6 flex items-center justify-center aspect-square overflow-hidden">
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 text-[11px] font-bold tracking-wide rounded-md bg-blue-600 text-white shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    {/* Discount Pill */}
                    {discountPercent > 0 && (
                      <span className="absolute bottom-3.5 left-3.5 z-10 px-2 py-0.5 text-[10px] font-bold rounded bg-rose-500 text-white">
                        -{discountPercent}%
                      </span>
                    )}

                    {/* Action Buttons: Wishlist & Quick View */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-2">
                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product);
                        }}
                        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-all duration-200 ${
                          isWishlisted
                            ? 'bg-rose-50 text-rose-500 hover:bg-rose-100'
                            : 'bg-white/90 text-slate-500 hover:text-rose-500 hover:bg-white'
                        }`}
                        title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                      </button>

                      {/* Quick View Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickView(product);
                        }}
                        className="w-9 h-9 rounded-full bg-white/90 text-slate-500 hover:text-blue-600 hover:bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Title */}
                      <h3 
                        onClick={() => onQuickView(product)}
                        className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 cursor-pointer"
                        title={product.title}
                      >
                        {product.title}
                      </h3>

                      {/* Price row matching screenshot: $199.99 $249.99 */}
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-xl font-extrabold text-slate-900">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm font-medium text-slate-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Star Rating & Review Count matching screenshot: ⭐⭐⭐⭐⭐ (120) */}
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => handleAddToCartClick(product, e)}
                      className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 text-white hover:bg-blue-600 active:scale-98 shadow-sm hover:shadow-blue-500/25'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}