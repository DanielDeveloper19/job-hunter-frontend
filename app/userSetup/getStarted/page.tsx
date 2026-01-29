import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
      <div className="max-w-3xl px-6 text-center">
        {/* Badge or Small Text */}
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 rounded-full">
          New Version 1.0 
        </span>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          JOB <span className="text-blue-600">HUNTER</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Find Your Dreamed Job while you sleep.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a 
    href="https://us-east-2kblsbxfoy.auth.us-east-2.amazoncognito.com/login/continue?client_id=1k3mpm9tbsmp96m9q2qjp4j438&redirect_uri=https%3A%2F%2Fd84l1y8p4kdic.cloudfront.net&response_type=code&scope=email+openid+phone" 
    className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95 text-center"
  >
    Get Started
  </a>
</div>

        {/* Social Proof / Footer Note */}
        <p className="mt-12 text-sm text-slate-400">
          The tool that helps Millions to Find their Dreamed job.
        </p>
      </div>
    </main>
  );
}