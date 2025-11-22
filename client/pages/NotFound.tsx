import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-accent" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-secondary mb-2">404</h1>

        <p className="text-2xl font-bold text-secondary mb-3">Page Not Found</p>

        <p className="text-slate-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        <p className="text-sm text-slate-500 mb-8 break-all">
          Requested path:{" "}
          <code className="bg-slate-100 px-2 py-1 rounded">
            {location.pathname}
          </code>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            to="/roles"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
