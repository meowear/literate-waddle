import { X, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items?: CartItem[];
}

export default function CartModal({
  isOpen,
  onClose,
  items = [],
}: CartModalProps) {
  if (!isOpen) return null;

  const sampleItems: CartItem[] = [
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

  const cartItems = items.length > 0 ? items : sampleItems;
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-secondary">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 font-medium">Your cart is empty</p>
              <Link
                to="/customer-dashboard"
                onClick={onClose}
                className="text-primary font-semibold hover:underline inline-block mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="text-4xl flex-shrink-0">{item.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-secondary text-sm line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-primary font-bold mt-1">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="p-1 hover:bg-white rounded transition-colors">
                      <Minus className="w-4 h-4 text-slate-600" />
                    </button>
                    <span className="px-2 py-1 bg-white rounded font-semibold text-sm text-secondary">
                      {item.quantity}
                    </span>
                    <button className="p-1 hover:bg-white rounded transition-colors">
                      <Plus className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
                <button className="p-1 text-slate-400 hover:text-red-500 transition-colors flex-shrink-0">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-200 p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tax (5%)</span>
                <span className="font-semibold">₹{tax}</span>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-4 flex justify-between text-lg">
              <span className="font-bold text-secondary">Total</span>
              <span className="font-bold text-primary text-xl">₹{total}</span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
