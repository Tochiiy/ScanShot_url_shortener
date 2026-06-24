import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center gap-6">
      <div className="text-8xl font-black text-success opacity-20">404</div>
      
      <div className="flex flex-col items-center gap-2">
        <FiAlertCircle size={40} className="text-success" />
        <h1 className="text-2xl font-black">Page not found</h1>
        <p className="text-base-content/60 text-sm max-w-sm">
          The page you're looking for doesn't exist or the short link has expired.
        </p>
      </div>

      <div className="flex gap-3">
        <Link to="/" className="btn btn-success">
          Go home
        </Link>
        <Link to="/how-to-use" className="btn btn-outline btn-success">
          How to use?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;