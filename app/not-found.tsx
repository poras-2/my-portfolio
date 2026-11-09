import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full glass-panel bg-slate-900/90 border border-slate-800 p-8 rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">404 // Page Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested system node could not be resolved on this network.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

