import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  Truck,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface TrackingUpdate {
  id: number;
  status: "pending" | "confirmed" | "picked" | "shipped" | "delivered";
  title: string;
  description: string;
  timestamp: string;
  icon: React.ReactNode;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  total: number;
  status: "pending" | "confirmed" | "picked" | "shipped" | "delivered";
  estimatedDelivery: string;
  items: Array<{
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  seller: {
    name: string;
    phone: string;
    location: string;
  };
  deliveryAgent?: {
    name: string;
    phone: string;
    vehicle: string;
  };
}

export default function OrderTracking() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "#LM-2024-123456",
      date: "Today",
      total: 535,
      status: "shipped",
      estimatedDelivery: "Today by 4:00 PM",
      items: [
        {
          id: 1,
          name: "Fresh Organic Apples",
          quantity: 2,
          price: 150,
          image: "🍎",
        },
        { id: 2, name: "Milk - 1 Liter", quantity: 1, price: 55, image: "🥛" },
      ],
      seller: {
        name: "Fresh Farm Supplies",
        phone: "+91 9876543210",
        location: "Downtown Market",
      },
      deliveryAgent: {
        name: "Raj Kumar",
        phone: "+91 9123456789",
        vehicle: "Bike - MH 02 AB 1234",
      },
    },
    {
      id: "2",
      orderNumber: "#LM-2024-123455",
      date: "Yesterday",
      total: 320,
      status: "delivered",
      estimatedDelivery: "Delivered",
      items: [
        {
          id: 4,
          name: "Cheddar Cheese Block",
          quantity: 1,
          price: 320,
          image: "🧀",
        },
      ],
      seller: {
        name: "Artisan Dairy",
        phone: "+91 9876543211",
        location: "Premium Cheese Shop",
      },
    },
    {
      id: "3",
      orderNumber: "#LM-2024-123454",
      date: "3 days ago",
      total: 420,
      status: "delivered",
      estimatedDelivery: "Delivered",
      items: [
        {
          id: 6,
          name: "Orange Juice - 1L",
          quantity: 2,
          price: 85,
          image: "🧃",
        },
        { id: 3, name: "Fresh Tomatoes", quantity: 1, price: 60, image: "🍅" },
      ],
      seller: {
        name: "Citrus Fresh",
        phone: "+91 9876543212",
        location: "Fruit Juice Store",
      },
    },
  ];

  const activeOrder = selectedOrder
    ? orders.find((o) => o.id === selectedOrder)
    : orders[0];

  const trackingUpdates: TrackingUpdate[] = [
    {
      id: 4,
      status: "shipped",
      title: "Out for Delivery",
      description: "Your order is on the way with Raj Kumar",
      timestamp: "2 hours ago",
      icon: <Truck className="w-6 h-6 text-primary" />,
    },
    {
      id: 3,
      status: "picked",
      title: "Picked Up",
      description: "Your order has been picked up from the seller",
      timestamp: "3 hours ago",
      icon: <Package className="w-6 h-6 text-primary" />,
    },
    {
      id: 2,
      status: "confirmed",
      title: "Order Confirmed",
      description: "Seller has confirmed your order",
      timestamp: "5 hours ago",
      icon: <CheckCircle className="w-6 h-6 text-success" />,
    },
    {
      id: 1,
      status: "pending",
      title: "Order Placed",
      description: "Your order has been successfully placed",
      timestamp: "Today at 10:30 AM",
      icon: <Package className="w-6 h-6 text-slate-400" />,
    },
  ];

  const statusColors = {
    pending: "bg-slate-100 text-slate-700",
    confirmed: "bg-blue-100 text-blue-700",
    picked: "bg-blue-100 text-blue-700",
    shipped: "bg-primary/20 text-primary",
    delivered: "bg-success/20 text-success",
  };

  const statusLabels = {
    pending: "Pending",
    confirmed: "Confirmed",
    picked: "Picked Up",
    shipped: "Out for Delivery",
    delivered: "Delivered",
  };

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
          <h1 className="text-2xl font-bold text-secondary">Track Orders</h1>
          <div className="w-24" />
        </div>
      </header>

      <div className="container-wide py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-secondary mb-4">My Orders</h2>
            <div className="space-y-3">
              {orders.map((order) => (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrder(order.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedOrder === order.id ||
                    (!selectedOrder && order.id === orders[0].id)
                      ? "border-primary bg-primary/5"
                      : "border-slate-200 hover:border-primary/50 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-bold text-secondary text-sm">
                      {order.orderNumber}
                    </p>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        statusColors[order.status]
                      }`}
                    >
                      {statusLabels[order.status]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-1">{order.date}</p>
                  <p className="font-semibold text-primary text-sm">
                    ₹{order.total}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="md:col-span-2">
            {activeOrder && (
              <>
                {/* Order Header */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">
                        {activeOrder.orderNumber}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {activeOrder.date}
                      </p>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full font-bold text-sm ${
                        statusColors[activeOrder.status]
                      }`}
                    >
                      {statusLabels[activeOrder.status]}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">
                        Estimated Delivery
                      </p>
                      <p className="font-bold text-secondary flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {activeOrder.estimatedDelivery}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">
                        Total Amount
                      </p>
                      <p className="font-bold text-primary text-lg">
                        ₹{activeOrder.total}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
                  <h4 className="font-bold text-secondary mb-6">
                    Tracking History
                  </h4>
                  <div className="space-y-6">
                    {trackingUpdates.map((update, idx) => (
                      <div key={update.id} className="flex gap-4 relative">
                        {/* Timeline Line */}
                        {idx < trackingUpdates.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-12 bg-slate-200" />
                        )}

                        {/* Icon */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${
                            activeOrder.status === update.status ||
                            (activeOrder.status === "delivered" &&
                              update.status !== "pending")
                              ? "bg-success/20"
                              : "bg-slate-100"
                          }`}
                        >
                          {update.icon}
                        </div>

                        {/* Content */}
                        <div className="pt-1 flex-1">
                          <p className="font-bold text-secondary">
                            {update.title}
                          </p>
                          <p className="text-sm text-slate-600 mb-1">
                            {update.description}
                          </p>
                          <p className="text-xs text-slate-500">
                            {update.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seller & Delivery Agent */}
                {activeOrder.status !== "pending" && (
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Seller Info */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                      <h4 className="font-bold text-secondary mb-4">
                        Seller Info
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-600 mb-1">
                            Store Name
                          </p>
                          <p className="font-semibold text-secondary">
                            {activeOrder.seller.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-600 mb-1">
                            Location
                          </p>
                          <p className="font-semibold text-secondary flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {activeOrder.seller.location}
                          </p>
                        </div>
                        <button className="w-full py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Call Seller
                        </button>
                      </div>
                    </div>

                    {/* Delivery Agent Info */}
                    {activeOrder.deliveryAgent &&
                      activeOrder.status === "shipped" && (
                        <div className="bg-primary/10 rounded-xl border-2 border-primary p-6">
                          <h4 className="font-bold text-secondary mb-4">
                            Delivery Agent
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-slate-600 mb-1">
                                Driver Name
                              </p>
                              <p className="font-semibold text-secondary">
                                {activeOrder.deliveryAgent.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-600 mb-1">
                                Vehicle
                              </p>
                              <p className="font-semibold text-secondary">
                                {activeOrder.deliveryAgent.vehicle}
                              </p>
                            </div>
                            <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                              <Phone className="w-4 h-4" />
                              Call Driver
                            </button>
                          </div>
                        </div>
                      )}
                  </div>
                )}

                {/* Order Items */}
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <h4 className="font-bold text-secondary mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {activeOrder.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{item.image}</span>
                          <div>
                            <p className="font-semibold text-secondary text-sm">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-600">
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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
