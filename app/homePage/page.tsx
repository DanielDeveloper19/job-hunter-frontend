import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
          JOB<span className="text-slate-900">HUNTER</span>
        </div>
        <div className="hidden md:flex gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Find Jobs</a>
          <a href="#" className="hover:text-blue-600 transition">Companies</a>
          <a href="#" className="hover:text-blue-600 transition">Salaries</a>
        </div>
        <Link href="/login" className="font-semibold text-slate-700 hover:text-blue-600">
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 pt-16 pb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Hunt your <br />
            <span className="text-blue-600 text-shadow-sm">Dream Career.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg">
            Stop searching and start hunting. Connect with over 5,000+ top companies 
            looking for talent like you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/signup" 
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 text-center"
            >
              Get Started
            </Link>
            <Link 
              href="/jobs" 
              className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all text-center"
            >
              Browse Jobs
            </Link>
          </div>
        </div>

        {/* Decorative Element / Mock Job Card */}
        <div className="md:w-1/2 w-full max-w-md bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-2xl rotate-2 hidden md:block">
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 border border-slate-100">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">JS</div>
              <div>
                <h3 className="font-bold">Senior Developer</h3>
                <p className="text-sm text-slate-500">TechCorp • Remote</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">$120k - $150k</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">Full-time</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm opacity-60 border border-slate-100">
             <p className="text-sm font-bold text-slate-400">Loading next hunter match...</p>
          </div>
        </div>
      </header>

      {/* Trust Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">Trusted by global leaders</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 font-black text-2xl italic text-slate-400">
            <span>GOOGLE</span>
            <span>AIRBNB</span>
            <span>STRIPE</span>
            <span>VERCEL</span>
          </div>
        </div>
      </section>
    </div>
  );
}