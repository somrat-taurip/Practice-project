import React, { useState } from 'react';
import TopBar from './components/TopBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Features from './components/Features.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import DealsBanner from './components/DealsBanner.jsx';
import AboutSection from './components/AboutSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import Newsletter from './components/Newsletter.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import WishlistDrawer from './components/WishlistDrawer.jsx';
import ProductQuickView from './components/ProductQuickView.jsx';
import AccountModal from './components/AccountModal.jsx';
import Toast from './components/Toast.jsx';
import { PRODUCTS } from './data/products.js';

export default function App() {
  // Initial cart with 3 items (matches the '3' badge in the original screenshot)
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[1], quantity: 1 },
    { ...PRODUCTS[2], quantity: 1 }
  ]);

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState([1]);

  // UI Drawers & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('home');

  // Toast notification
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  // Add product to Cart
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`Added ${quantity}x "${product.title}" to cart!`);
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove from Cart
  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Item removed from cart.');
  };

  // Clear Cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.title}" from wishlist.`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to wishlist!`);
        return [...prev, product.id];
      }
    });
  };

  // Total cart badge count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Products in wishlist
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle category selection
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    handleNavigate('shop');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* 1. Top Bar (Matching Screenshot Navy Bar) */}
      <TopBar />

      {/* 2. Main Navbar with search, cart/wishlist counts, active link indicator */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeSection={activeSection}
        setActiveSection={handleNavigate}
      />

      {/* 3. Hero Section (Shop More, Save More + Device Showcase + Trust Badges) */}
      <main className="flex-1">
        <Hero
          onShopNow={() => handleNavigate('shop')}
          onExploreDeals={() => handleNavigate('deals')}
        />

        {/* 4. Categories Grid (Electronics, Fashion, Home, Beauty, Sports, Books, Toys, More) */}
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. Features Strip (Free Shipping, 24/7 Support, Secure Payments, Best Prices) */}
        <Features />

        {/* 6. Featured Products (Smart Watch, Earbuds, Backpack, Canon Camera) */}
        <FeaturedProducts
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onQuickView={(p) => setQuickViewProduct(p)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchTerm={searchTerm}
        />

        {/* 7. Flash Deals / Summer Sale Section */}
        <DealsBanner onShopNow={() => handleNavigate('shop')} />

        {/* 8. About Section */}
        <AboutSection />

        {/* 9. Real Testimonials */}
        <Testimonials />

        {/* 10. Newsletter Signup */}
        <Newsletter onShowToast={showToast} />

        {/* 11. Contact Us Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* 12. Complete Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* Slide-over Shopping Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Slide-over Wishlist */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onAddToCart={(product) => {
          handleAddToCart(product);
          setIsWishlistOpen(false);
          setIsCartOpen(true);
        }}
        onRemoveFromWishlist={(id) => {
          setWishlistIds((prev) => prev.filter((i) => i !== id));
          showToast('Removed item from wishlist.');
        }}
      />

      {/* Product Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlistIds.includes(quickViewProduct.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Account Login / Signup Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onShowToast={showToast}
      />

      {/* Interactive Toast Notifications */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />

    </div>
  );
}
