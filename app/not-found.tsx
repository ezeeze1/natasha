import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
