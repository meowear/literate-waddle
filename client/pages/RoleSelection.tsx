import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Package, Users, TrendingUp, Mail, Lock, User, Phone, MapPin, Building } from "lucide-react";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<"customer" | "retailer" | "wholesaler" | null>(null);
  const [step, setStep] = useState<"role" | "signup">("role");

  const roles = [
    {
      id: "customer",
      title: "Customer",
      icon: Users,
      description: "Shop for products and track deliveries",
      benefits: [
        "Smart search and filtering",
        "Personalized recommendations",
        "Real-time order tracking",
        "Feedback and ratings",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "retailer",
      title: "Retailer",
      icon: Package,
      description: "Manage your inventory and reach customers",
      benefits: [
        "Easy inventory management",
        "Wholesale ordering",
        "Customer analytics",
        "Payment tracking",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "wholesaler",
      title: "Wholesaler",
      icon: TrendingUp,
      description: "Distribute products to multiple retailers",
      benefits: [
        "Bulk order management",
        "Retailer network",
        "Advanced pricing control",
        "Transaction history",
      ],
      color: "from-orange-500 to-amber-500",
    },
  ];

  const selectedRoleData = roles.find(r => r.id === selectedRole);
  const Icon = selectedRoleData?.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container-wide py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <h1 className="text-xl font-bold text-secondary">Live MART</h1>
          <div className="w-14" />
        </div>
      </header>

      <div className="container-wide py-12 md:py-20">
        {step === "role" ? (
          // Role Selection Step
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Join as a
              </h1>
              <p className="text-xl text-slate-600">
                Choose your role to get started with Live MART
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id as any)}
                  className={`group relative p-8 rounded-2xl border-2 transition-all text-left ${
                    selectedRole === role.id
                      ? "border-primary bg-primary/5"
                      : "border-slate-200 hover:border-primary/50 bg-white"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all ${
                      selectedRole === role.id
                        ? `bg-gradient-to-br ${role.color} text-white`
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    }`}>
                      <role.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold text-secondary mb-2">{role.title}</h3>
                    <p className="text-slate-600 text-sm mb-6">{role.description}</p>

                    <ul className="space-y-2 mb-6">
                      {role.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {selectedRole === role.id && (
                      <div className="inline-flex items-center gap-2 text-primary font-semibold">
                        <Check className="w-5 h-5" />
                        Selected
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep("signup")}
                disabled={!selectedRole}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                Continue to Signup
              </button>
            </div>
          </div>
        ) : (
          // Signup Step
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setStep("role")}
              className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Role Selection
            </button>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedRoleData?.color} text-white flex items-center justify-center mb-4`}>
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-2">
                  Sign Up as {selectedRoleData?.title}
                </h2>
                <p className="text-slate-600">{selectedRoleData?.description}</p>
              </div>

              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Location Field */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    City/Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Business Name - Only for Retailer & Wholesaler */}
                {selectedRole !== "customer" && (
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      Business Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Your business name"
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>
                )}

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer mt-0.5"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={() => {
                    // In a real app, this would submit the form and navigate to dashboard
                    if (selectedRole === "customer") {
                      window.location.href = "/customer-dashboard";
                    } else if (selectedRole === "retailer") {
                      window.location.href = "/retailer-dashboard";
                    } else {
                      window.location.href = "/wholesaler-dashboard";
                    }
                  }}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
                >
                  Create Account
                </button>

                {/* Login Link */}
                <div className="text-center text-slate-600">
                  Already have an account?{" "}
                  <a href="#" className="text-primary font-semibold hover:underline">
                    Sign In
                  </a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
