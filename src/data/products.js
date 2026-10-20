// Product and Category data for ShopEasy Store

export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: 'Headphones',
    color: 'bg-blue-50 text-blue-600',
    itemCount: '150+ items',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: 'Shirt',
    color: 'bg-indigo-50 text-indigo-600',
    itemCount: '320+ items',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&q=80'
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    icon: 'Armchair',
    color: 'bg-emerald-50 text-emerald-600',
    itemCount: '210+ items',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: 'Sparkles',
    color: 'bg-pink-50 text-pink-600',
    itemCount: '95+ items',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: 'Trophy',
    color: 'bg-amber-50 text-amber-600',
    itemCount: '180+ items',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=300&q=80'
  },
  {
    id: 'books',
    name: 'Books',
    icon: 'BookOpen',
    color: 'bg-cyan-50 text-cyan-600',
    itemCount: '450+ items',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80'
  },
  {
    id: 'toys',
    name: 'Toys',
    icon: 'Gamepad2',
    color: 'bg-orange-50 text-orange-600',
    itemCount: '130+ items',
    image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=300&q=80'
  },
  {
    id: 'more',
    name: 'More',
    icon: 'LayoutGrid',
    color: 'bg-purple-50 text-purple-600',
    itemCount: '800+ items',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&q=80'
  }
];

export const PRODUCTS = [
  // 4 Featured products directly from screenshot
  {
    id: 1,
    title: 'Smart Watch Series 8',
    category: 'electronics',
    price: 199.99,
    originalPrice: 249.99,
    rating: 5,
    reviews: 120,
    featured: true,
    isNew: true,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80',
    description: 'High-performance smart watch featuring an always-on Retina display, advanced health sensors, heart rate & ECG tracking, and water resistance up to 50 meters.',
    features: ['Always-On OLED Display', '7-Day Battery Life', 'Water Resistant 50m', 'Fitness & Sleep Tracker']
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    category: 'electronics',
    price: 59.99,
    originalPrice: 89.99,
    rating: 5,
    reviews: 95,
    featured: true,
    isNew: false,
    badge: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80',
    description: 'Crisp audio with active noise cancellation, deep bass, transparency mode, ergonomic fit, and over 32 hours of playtime with the fast-charging wireless case.',
    features: ['Active Noise Cancellation', '32h Total Battery', 'Bluetooth 5.3', 'IPX5 Water Resistant']
  },
  {
    id: 3,
    title: 'Laptop Backpack',
    category: 'fashion',
    price: 39.99,
    originalPrice: 59.99,
    rating: 5,
    reviews: 80,
    featured: true,
    isNew: false,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    description: 'Ergonomic water-resistant commuter backpack with a dedicated padded 15.6" laptop compartment, USB charging port, anti-theft hidden pocket, and breathable straps.',
    features: ['Fits up to 15.6" Laptop', 'Water-Resistant Fabric', 'Integrated USB Port', 'Ergonomic Padded Straps']
  },
  {
    id: 4,
    title: 'Canon DSLR Camera',
    category: 'electronics',
    price: 499.99,
    originalPrice: 599.99,
    rating: 5,
    reviews: 60,
    featured: true,
    isNew: true,
    badge: 'Limited',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    description: 'Capture stunning high-resolution 24.1MP photos and 4K UHD video with fast autofocus, built-in Wi-Fi/NFC for instant photo sharing, and 18-55mm IS II lens included.',
    features: ['24.1 Megapixel CMOS', '4K Video Recording', 'Wi-Fi & Bluetooth', '18-55mm Kit Lens']
  },
  // Additional products for store richness & category filtering
  {
    id: 5,
    title: 'Casual Cotton Minimalist T-Shirt',
    category: 'fashion',
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 142,
    featured: false,
    isNew: true,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80',
    description: '100% organic ring-spun combed cotton t-shirt with a modern relaxed fit and soft feel, perfect for everyday casual style.',
    features: ['100% Organic Cotton', 'Pre-shrunk Fabric', 'Breathable Weave', 'Machine Washable']
  },
  {
    id: 6,
    title: 'Modern Ergonomic Office Chair',
    category: 'home',
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 74,
    featured: false,
    isNew: false,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1580481077195-c9584e03b211?w=600&q=80',
    description: 'Premium mesh desk chair with adjustable lumbar support, 3D armrests, heavy-duty pneumatic gas lift, and smooth nylon rolling casters.',
    features: ['Dynamic Lumbar Support', 'Breathable Mesh', '3D Adjustable Arms', 'Heavy Duty Base']
  },
  {
    id: 7,
    title: 'Luxury Hydrating Skincare Set',
    category: 'beauty',
    price: 45.00,
    originalPrice: 65.00,
    rating: 5,
    reviews: 110,
    featured: false,
    isNew: true,
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    description: 'Rejuvenating face serum, gentle toner, and botanical moisturizer formulated with hyaluronic acid and niacinamide for a natural radiant glow.',
    features: ['Hyaluronic Acid + Niacinamide', 'Cruelty Free & Vegan', 'All Skin Types', 'Paraben Free']
  },
  {
    id: 8,
    title: 'Official Pro Grip Basketball',
    category: 'sports',
    price: 29.99,
    originalPrice: 42.00,
    rating: 4.7,
    reviews: 58,
    featured: false,
    isNew: false,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=80',
    description: 'Composite leather indoor & outdoor basketball with deep channel design for superior grip control and durable bounce performance.',
    features: ['Indoor/Outdoor Use', 'Deep Pebble Grip', 'Butyl Bladder', 'Official Size 7']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Verified Buyer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    comment: 'The delivery was super fast! Ordered the Smart Watch Series 8 on Tuesday and received it by Thursday morning. Beautiful packaging and 100% authentic product.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    comment: 'Best customer service experience ever. I had a question regarding the camera lens compatibility and their 24/7 support resolved it in under 2 minutes!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Watson',
    role: 'Frequent Shopper',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    comment: 'ShopEasy has become my go-to online store. The prices are unbeatable and the 30-day return policy gives complete peace of mind.',
    rating: 5
  }
];