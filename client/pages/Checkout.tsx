import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Clock,
  CreditCard,
  Truck,
  Package,
  CheckCircle,
} from "lucide-react";

interface CheckoutItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Checkout() {
  const [step, setStep] = useState<
    "cart" | "delivery" | "payment" | "confirmation"
  >("cart");
  const [orderType, setOrderType] = useState<"online" | "offline">("online");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const cartItems: CheckoutItem[] = [
    {
      id: 1,
      name: "Fresh Organic Apples",
      price: 150,
      quantity: 2,
      image: "🍎",
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: 45,
      quantity: 1,
      image: "🍞",
    },
    {
      id: 4,
      name: "Milk - 1 Liter",
      price: 55,
      quantity: 3,
      image: "🥛",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = Math.round(subtotal * 0.05);
  const delivery = orderType === "online" ? 50 : 0;
  const total = subtotal + tax + delivery;

  const steps = [
    { id: "cart", name: "Review Order", icon: Package },
    { id: "delivery", name: "Delivery", icon: Truck },
    { id: "payment", name: "Payment", icon: CreditCard },
    { id: "confirmation", name: "Confirmation", icon: CheckCircle },
  ];

  const StepIcon = steps.find((s) => s.id === step)?.icon || Package;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="container-wide py-4 flex items-center justify-between">
          <Link
            to="/customer-dashboard"
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold text-secondary">Checkout</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container-wide py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Progress Steps */}
          <div className="md:col-span-2 order-2 md:order-1">
            {/* Step Indicator */}
            <div className="mb-8 flex items-center justify-between">
              {steps.map((s, idx) => {
                const StepIconComponent = s.icon;
                const isCompleted =
                  steps.findIndex((st) => st.id === step) > idx;
                const isCurrent = s.id === step;

                return (
                  <div key={s.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                          isCurrent
                            ? "bg-primary text-white scale-110"
                            : isCompleted
                              ? "bg-success text-white"
                              : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        <StepIconComponent className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-semibold text-center hidden sm:block ${
                          isCurrent ? "text-primary" : "text-slate-600"
                        }`}
                      >
                        {s.name}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          isCompleted ? "bg-success" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Cart Review Step */}
            {step === "cart" && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Review Your Order
                </h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{item.image}</span>
                        <div>
                          <p className="font-semibold text-secondary">
                            {item.name}
                          </p>
                          <p className="text-sm text-slate-600">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-bold text-primary">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6 space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Tax (5%)</span>
                    <span className="font-semibold">₹{tax}</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep("delivery")}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all"
                >
                  Continue to Delivery
                </button>
              </div>
            )}

            {/* Delivery Step */}
            {step === "delivery" && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Delivery Method
                </h2>

                {/* Online vs Offline */}
                <div className="space-y-4 mb-8">
                  <label
                    className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all"
                    style={{
                      borderColor:
                        orderType === "online"
                          ? "var(--primary)"
                          : "var(--border)",
                    }}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value="online"
                      checked={orderType === "online"}
                      onChange={(e) =>
                        setOrderType(e.target.value as "online" | "offline")
                      }
                      className="w-5 h-5"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-bold text-secondary">
                        Online Order - Quick Delivery
                      </p>
                      <p className="text-sm text-slate-600">
                        Today within 2-4 hours
                      </p>
                      <p className="text-primary font-bold mt-1">
                        ₹{delivery} delivery charge
                      </p>
                    </div>
                  </label>

                  <label
                    className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all"
                    style={{
                      borderColor:
                        orderType === "offline"
                          ? "var(--primary)"
                          : "var(--border)",
                    }}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      value="offline"
                      checked={orderType === "offline"}
                      onChange={(e) =>
                        setOrderType(e.target.value as "online" | "offline")
                      }
                      className="w-5 h-5"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-bold text-secondary">
                        Offline Order - Schedule Pickup
                      </p>
                      <p className="text-sm text-slate-600">
                        Choose a date and time
                      </p>
                      <p className="text-success font-bold mt-1">
                        Free with reminder
                      </p>
                    </div>
                  </label>
                </div>

                {/* Offline Scheduling */}
                {orderType === "offline" && (
                  <div className="space-y-4 mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Select Time
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                      >
                        <option value="">Choose a time</option>
                        <option value="09:00">9:00 AM - 10:00 AM</option>
                        <option value="10:00">10:00 AM - 11:00 AM</option>
                        <option value="14:00">2:00 PM - 3:00 PM</option>
                        <option value="16:00">4:00 PM - 5:00 PM</option>
                        <option value="18:00">6:00 PM - 7:00 PM</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-blue-50 p-3 rounded border border-blue-200">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>
                        We'll send you a reminder 1 hour before pickup time
                      </span>
                    </div>
                  </div>
                )}

                {/* Delivery Address */}
                <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-secondary">
                        Delivery Address
                      </p>
                      <p className="text-slate-600">
                        Downtown Market Area, City
                      </p>
                    </div>
                  </div>
                  <button className="text-primary font-semibold text-sm hover:underline">
                    Change Address
                  </button>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("cart")}
                    className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep("payment")}
                    disabled={
                      orderType === "offline" &&
                      (!selectedDate || !selectedTime)
                    }
                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Payment Step */}
            {step === "payment" && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Payment Method
                </h2>

                <div className="space-y-4 mb-8">
                  <label className="flex items-center p-4 border-2 border-primary bg-primary/5 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="w-5 h-5"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-bold text-secondary">
                        Credit/Debit Card
                      </p>
                      <p className="text-sm text-slate-600">
                        Visa, Mastercard, RuPay
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <input type="radio" name="payment" className="w-5 h-5" />
                    <div className="ml-4 flex-1">
                      <p className="font-bold text-secondary">Digital Wallet</p>
                      <p className="text-sm text-slate-600">
                        Google Pay, PhonePe, PayTM
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-primary/50 transition-colors">
                    <input type="radio" name="payment" className="w-5 h-5" />
                    <div className="ml-4 flex-1">
                      <p className="font-bold text-secondary">
                        Cash on Delivery
                      </p>
                      <p className="text-sm text-slate-600">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>
                </div>

                {/* Card Details */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-8">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="4242 4242 4242 4242"
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("delivery")}
                    className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep("confirmation")}
                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}

            {/* Confirmation Step */}
            {step === "confirmation" && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8 text-center">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-2">
                  Order Confirmed!
                </h2>
                <p className="text-slate-600 mb-6">
                  Thank you for your order. You'll receive updates via email and
                  SMS.
                </p>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8 text-left">
                  <p className="text-sm text-slate-600 mb-2">Order Number</p>
                  <p className="text-2xl font-bold text-secondary mb-6">
                    #LM-2024-123456
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Tax</span>
                      <span className="font-semibold">₹{tax}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Delivery</span>
                      <span className="font-semibold">₹{delivery}</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₹{total}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    to="/customer-dashboard"
                    className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/orders"
                    className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-secondary mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-slate-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tax (5%)</span>
                  <span className="font-semibold">₹{tax}</span>
                </div>
                {delivery > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Delivery</span>
                    <span className="font-semibold">₹{delivery}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-200 pt-6 flex justify-between text-lg">
                <span className="font-bold text-secondary">Total</span>
                <span className="font-bold text-primary text-xl">₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
