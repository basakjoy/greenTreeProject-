import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="page-image-hero max-w-md w-full text-center rounded-3xl p-8 sm:p-10 border border-forest-700 shadow-lift">
        <span className="text-xs font-bold text-eco uppercase tracking-widest">
          404 Error
        </span>
        <h1 className="font-display font-extrabold text-4xl text-white mt-2 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-200 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved to another location.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest-950 text-white font-semibold text-xs hover:bg-eco hover:text-forest-950 transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sand-100 text-forest-900 font-semibold text-xs border border-forest-200 hover:bg-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

