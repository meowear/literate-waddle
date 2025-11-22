import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  MapPin,
  Heart,
  Star,
  Filter,
  Menu,
  X,
  LogOut,
  Home,
  Package,
  History,
  Settings,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  location: string;
  distance: string;
  seller: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    price: 150,
    originalPrice: 200,
    category: "Fresh Produce",
    image: "🍎",
    rating: 4.8,
    reviews: 234,
    stock: 45,
    location: "Downtown Market",
    distance: "0.5 km",
    seller: "Fresh Farm Supplies",
    badge: "25% OFF",
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    price: 45,
    originalPrice: 60,
    category: "Bakery",
    image: "🍞",
    rating: 4.6,
    reviews: 128,
    stock: 12,
    location: "City Bakery",
    distance: "1.2 km",
    seller: "Premium Bakery Co.",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Fresh Tomatoes - 1kg",
    price: 60,
    category: "Fresh Produce",
    image: "🍅",
    rating: 4.7,
    reviews: 89,
    stock: 30,
    location: "Local Farmer's Market",
    distance: "2 km",
    seller: "Green Valley Farms",
  },
  {
    id: 4,
    name: "Milk - 1 Liter",
    price: 55,
    category: "Dairy",
    image: "🥛",
    rating: 4.9,
    reviews: 567,
    stock: 100,
    location: "Dairy Store",
    distance: "0.8 km",
    seller: "Pure Dairy Products",
  },
  {
    id: 5,
    name: "Orange Juice - 1L",
    price: 85,
    originalPrice: 100,
    category: "Beverages",
    image: "🧃",
    rating: 4.5,
    reviews: 156,
    stock: 25,
    location: "Fruit Juice Store",
    distance: "1.5 km",
    seller: "Citrus Fresh",
    badge: "15% OFF",
  },
  {
    id: 6,
    name: "Cheddar Cheese Block",
    price: 320,
    category: "Dairy",
    image: "🧀",
    rating: 4.8,
    reviews: 78,
    stock: 15,
    location: "Premium Cheese Shop",
    distance: "2.5 km",
    seller: "Artisan Dairy",
  },
];

export default function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const categories = [
    { id: "all", name: "All Products", icon: "📦" },
    { id: "fresh", name: "Fresh Produce", icon: "🥬" },
    { id: "dairy", name: "Dairy", icon: "🥛" },
    { id: "bakery", name: "Bakery", icon: "🍞" },
    { id: "beverages", name: "Beverages", icon: "🧃" },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container-wide py-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <Package className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-secondary hidden sm:inline">
                Live MART
              </span>
            </Link>

            {/* Search Bar - Hidden on Mobile */}
            <div className="hidden md:block flex-1 mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ShoppingCart className="w-6 h-6 text-secondary" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <button className="hidden md:block p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-6 h-6 text-secondary" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container-wide py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block md:col-span-1`}
          >
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-20">
              <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {/* User Profile Card */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 mb-6 border border-primary/20">
                <p className="text-sm text-slate-600 mb-1">Welcome back!</p>
                <p className="font-semibold text-secondary">John Doe</p>
                <button className="mt-3 w-full text-center text-sm text-primary font-semibold hover:underline">
                  View Profile
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-3">
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <span className="mr-2">{cat.icon}</span>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Distance
                </h4>
                <div className="space-y-2">
                  {["< 1 km", "1-2 km", "2-5 km", "5+ km"].map((distance) => (
                    <label
                      key={distance}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="distance"
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm text-slate-600">{distance}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
                  <History className="w-5 h-5" />
                  <span className="font-medium">Order History</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Wishlist</span>
                </button>
                <hr className="my-4" />
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-red-600 font-medium">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {selectedCategory === "all"
                  ? "All Products"
                  : categories.find((c) => c.id === selectedCategory)?.name}
              </h1>
              <p className="text-slate-600">
                {filteredProducts.length} products available near you
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary hover:shadow-lg transition-all"
                >
                  {/* Product Image */}
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 h-48 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <span className="text-6xl">{product.image}</span>
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                        {product.badge}
                      </div>
                    )}
                    {product.stock < 10 && !product.badge && (
                      <div className="absolute top-4 right-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Low Stock
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {/* Store Info */}
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{product.location}</span>
                      <span>•</span>
                      <span>{product.distance}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-bold text-secondary text-sm mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Seller */}
                    <p className="text-xs text-slate-500 mb-3">
                      {product.seller}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-accent text-accent"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-slate-700">
                        {product.rating}
                      </span>
                      <span className="text-xs text-slate-500">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCartCount(cartCount + 1);
                      }}
                      className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">
                  No products found
                </h3>
                <p className="text-slate-600">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
