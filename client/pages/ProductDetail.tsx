import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, Clock, Star, ShoppingCart, MessageSquare, TrendingUp, AlertCircle } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  helpful: number;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "Fresh Organic Apples - Premium Quality",
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
    sellerRating: 4.7,
    sellerReviews: 1024,
    description:
      "Fresh, organic apples sourced directly from local farms. These premium quality apples are handpicked to ensure the best taste and nutritional value. Perfect for families looking for healthy, pesticide-free produce.",
    features: [
      "100% Organic - No pesticides or artificial fertilizers",
      "Sourced from certified local farms",
      "Handpicked for quality",
      "Rich in fiber and vitamins",
      "Perfect for daily consumption",
    ],
    specifications: {
      "Weight": "1 kg",
      "Color": "Red & Green mix",
      "Origin": "Local Orchards",
      "Shelf Life": "7-10 days when refrigerated",
      "Certification": "Organic Certified",
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      author: "Priya Sharma",
      rating: 5,
      text: "Excellent quality apples! Fresh and tasty. Delivery was quick and the packaging protected the fruits well.",
      date: "2 days ago",
      helpful: 24,
    },
    {
      id: 2,
      author: "Raj Kumar",
      rating: 4,
      text: "Good quality but a couple of apples had minor bruises. Overall satisfied with the purchase.",
      date: "1 week ago",
      helpful: 12,
    },
    {
      id: 3,
      author: "Anjali Patel",
      rating: 5,
      text: "Best apples I've bought online! Very fresh and delicious. Will definitely order again.",
      date: "2 weeks ago",
      helpful: 34,
    },
  ];

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="container-wide py-4 flex items-center justify-between">
          <Link
            to="/customer-dashboard"
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Shopping</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <h1 className="text-2xl font-bold text-secondary">Live MART</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container-wide py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image Section */}
          <div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-96 md:h-full min-h-96 flex items-center justify-center relative mb-6">
              <span className="text-9xl">{product.image}</span>
              <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-sm">
                25% OFF
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            {/* Breadcrumb */}
            <p className="text-sm text-slate-600 mb-4">
              <a href="#" className="hover:text-primary">
                Fresh Produce
              </a>{" "}
              / {product.name}
            </p>

            {/* Title & Rating */}
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-secondary">{product.rating}</span>
                <span className="text-slate-600">({product.reviews} reviews)</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4" />
                <span>{product.location}</span>
                <span>•</span>
                <span>{product.distance}</span>
              </div>
            </div>

            {/* Stock Status */}
            {product.stock < 10 ? (
              <div className="flex items-center gap-2 mb-6 p-3 bg-warning/10 border border-warning/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-warning" />
                <span className="text-sm font-semibold text-warning">
                  Only {product.stock} items left in stock!
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mb-6 text-green-600 font-semibold">
                <span className="w-2 h-2 bg-green-600 rounded-full" />
                In Stock ({product.stock} available)
              </div>
            )}

            {/* Price Section */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-2xl text-slate-500 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-lg font-bold text-sm">
                  Save ₹{product.originalPrice - product.price}
                </span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Sold by</p>
                  <p className="font-bold text-secondary text-lg">{product.seller}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.sellerRating)
                            ? "fill-accent text-accent"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    {product.sellerRating} ({product.sellerReviews})
                  </span>
                </div>
              </div>
              <button className="text-primary font-semibold text-sm hover:underline">
                View Seller Profile
              </button>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-slate-600 hover:text-primary transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-bold text-secondary border-x border-slate-200">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-slate-600 hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-slate-600">
                  ₹{(product.price * quantity).toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className="py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`py-3 border-2 rounded-lg font-bold transition-all ${
                    liked
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-slate-200 text-slate-600 hover:border-primary"
                  }`}
                >
                  <Heart className={`w-5 h-5 mx-auto ${liked ? "fill-current" : ""}`} />
                </button>
              </div>

              <button className="w-full py-3 border-2 border-slate-200 text-secondary rounded-lg font-bold hover:border-primary transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <p className="text-xs text-slate-600 mb-1">Delivery</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-secondary">Today</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-600 mb-1">Free Shipping</p>
                <p className="font-semibold text-secondary">On orders > ₹500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">About this Product</h2>
            <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>

            <h3 className="text-lg font-bold text-secondary mb-4">Why You'll Love It</h3>
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">Product Specifications</h2>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-start justify-between py-3 border-b border-slate-200"
                >
                  <span className="font-semibold text-secondary">{key}</span>
                  <span className="text-slate-600 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-secondary">Customer Reviews</h2>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Write a Review
            </button>
          </div>

          {/* Reviews Summary */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
              <p className="text-slate-600 mb-2">Overall Rating</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">{product.rating}</div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">Based on {product.reviews} reviews</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-600 mb-3">Rating Distribution</p>
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-slate-600 w-4">{star}★</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-success/10 rounded-xl p-8 border border-success/20">
              <p className="text-success font-bold text-lg mb-2">✓ Verified Seller</p>
              <p className="text-slate-600 text-sm">
                This product has been verified by Live MART to ensure authenticity and quality.
              </p>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-slate-200 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-secondary">{review.author}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-accent text-accent"
                                : "text-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">{review.date}</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-600">
                    Verified Purchase
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{review.text}</p>
                <button className="text-sm text-primary font-semibold hover:underline">
                  Helpful ({review.helpful})
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}