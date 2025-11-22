import {
  X,
  User,
  Lock,
  Bell,
  MapPin,
  CreditCard,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "profile" | "preferences" | "account" | "support"
  >("profile");

  if (!isOpen) return null;

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "preferences", name: "Preferences", icon: Bell },
    { id: "account", name: "Account", icon: Lock },
    { id: "support", name: "Support", icon: HelpCircle },
  ];

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-secondary">Settings</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 pt-4 border-b border-slate-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-primary text-primary font-semibold"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold text-secondary">John Doe</h3>
                <p className="text-slate-600">john.doe@example.com</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+91 9876543210"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:outline-none transition-colors bg-slate-50 focus:bg-white"
                />
              </div>

              <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Save Changes
              </button>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-center gap-3">
                  {isDarkMode ? (
                    <Moon className="w-5 h-5 text-primary" />
                  ) : (
                    <Sun className="w-5 h-5 text-accent" />
                  )}
                  <div>
                    <p className="font-semibold text-secondary">Dark Mode</p>
                    <p className="text-sm text-slate-600">Toggle dark theme</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    isDarkMode ? "bg-primary" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      isDarkMode ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div>
                <p className="font-semibold text-secondary mb-3">
                  Notifications
                </p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-slate-600">Order updates</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-slate-600">Promotional offers</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-slate-600">
                      Product recommendations
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-2">
                  Delivery Location
                </label>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-slate-700">
                    Downtown Market Area, City
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-secondary mb-3">
                  Payment Methods
                </p>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-secondary">
                        Credit Card
                      </p>
                      <p className="text-sm text-slate-600">
                        •••• •••• •••• 4242
                      </p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm font-semibold">
                    Edit
                  </button>
                </div>
              </div>

              <div>
                <p className="font-semibold text-secondary mb-3">Password</p>
                <button className="w-full py-2 border-2 border-slate-200 text-secondary rounded-lg font-semibold hover:border-primary transition-colors">
                  Change Password
                </button>
              </div>

              <div>
                <p className="font-semibold text-secondary mb-3">
                  Account Status
                </p>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700">
                    ✓ Your account is active and verified
                  </p>
                </div>
              </div>

              <button className="w-full py-2 border-2 border-red-200 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Delete Account
              </button>
            </div>
          )}

          {/* Support Tab */}
          {activeTab === "support" && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition-colors cursor-pointer">
                <p className="font-semibold text-secondary mb-1">Help Center</p>
                <p className="text-sm text-slate-600">Browse FAQs and guides</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition-colors cursor-pointer">
                <p className="font-semibold text-secondary mb-1">
                  Contact Support
                </p>
                <p className="text-sm text-slate-600">
                  Chat with our support team
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition-colors cursor-pointer">
                <p className="font-semibold text-secondary mb-1">
                  Report an Issue
                </p>
                <p className="text-sm text-slate-600">
                  Let us know about problems
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition-colors cursor-pointer">
                <p className="font-semibold text-secondary mb-1">
                  Terms & Privacy
                </p>
                <p className="text-sm text-slate-600">Read our policies</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6">
          <button className="w-full flex items-center justify-center gap-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-semibold">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
