import { Link } from "react-router-dom";
import {
  ArrowRight,
  Package,
  Users,
  TrendingUp,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="container-wide py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-secondary">Live MART</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/roles"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container-wide py-20 md:py-32 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Your Complete
            <span className="text-primary"> Online Delivery</span>
            <br />
            Ecosystem
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Seamlessly connect customers, retailers, and wholesalers. Order with
            confidence, deliver with speed, and grow your business with Live
            MART.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/roles"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container-wide py-20 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
          Why Choose Live MART?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Fast Delivery
            </h3>
            <p className="text-slate-600">
              Real-time order tracking and notifications keep you updated every
              step of the way.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Local First
            </h3>
            <p className="text-slate-600">
              Discover region-specific products and support local businesses in
              your community.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Multi-Role Platform
            </h3>
            <p className="text-slate-600">
              Seamless experience for customers, retailers, and wholesalers all
              in one place.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Flexible Ordering
            </h3>
            <p className="text-slate-600">
              Online and offline ordering options with calendar integration and
              reminders.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Inventory Control
            </h3>
            <p className="text-slate-600">
              Real-time stock updates and intelligent inventory management for
              retailers.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              Transparent Pricing
            </h3>
            <p className="text-slate-600">
              Clear, competitive pricing with secure payment options online and
              offline.
            </p>
          </div>
        </div>
      </section>

      {/* Three Roles Section */}
      <section className="container-wide py-20 md:py-32 bg-gradient-to-b from-transparent to-slate-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
          Built for Everyone
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Customer Role */}
          <Link
            to="/roles"
            className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                For Customers
              </h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Browse and search products</li>
                <li>✓ Smart filtering by price & location</li>
                <li>✓ Easy checkout & tracking</li>
                <li>✓ Personalized recommendations</li>
              </ul>
              <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                Explore Now <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>

          {/* Retailer Role */}
          <Link
            to="/roles"
            className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                For Retailers
              </h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Manage inventory easily</li>
                <li>✓ Track customer orders</li>
                <li>✓ Supplier management</li>
                <li>✓ Analytics & insights</li>
              </ul>
              <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>

          {/* Wholesaler Role */}
          <Link
            to="/roles"
            className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                For Wholesalers
              </h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Distribute to retailers</li>
                <li>✓ Set competitive pricing</li>
                <li>✓ Transaction history</li>
                <li>✓ Stock management</li>
              </ul>
              <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                Sign Up <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-wide py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Ready to Transform Your Shopping?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of customers, retailers, and wholesalers already
            using Live MART.
          </p>
          <Link
            to="/roles"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Create Your Account <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 mt-20">
        <div className="container-wide py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold text-secondary">
                  Live MART
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                Connecting communities through seamless online delivery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-4">
                For Customers
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browse Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Track Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Recommendations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-4">
                For Business
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sell With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Become Retailer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Wholesale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>
              &copy; 2025 Live MART. All rights reserved. Empowering local
              commerce.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
