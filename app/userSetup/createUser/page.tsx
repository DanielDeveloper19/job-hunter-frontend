'use client'

import { useActionState } from 'react';
import { createUserAction } from '../actions';

export default function Page() {
  const [state, formAction, isPending] = useActionState(createUserAction, {
    status: 0,
    ok: false,
    message: ''
  });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Let us get to know you better</h2>
          <p className="text-slate-500 text-sm">Join our community today.</p>
        </div>

        <form action={formAction} className="flex flex-col gap-5">
          {/* Full Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
            <input 
              name="fullName" 
              placeholder="John Doe" 
              required 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
            <input 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
              required 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
            />
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isPending}
            className={`mt-2 w-full py-3 px-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2
              ${isPending 
                ? 'bg-slate-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98] shadow-md hover:shadow-lg'
              }`}
          >
            {isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </>
            ) : 'Create User'}
          </button>
        </form>

        {/* Feedback Message */}
        {state.message && (
          <div className={`mt-6 p-4 rounded-lg flex items-center gap-3 text-sm font-medium border
            ${state.ok 
              ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
              : 'bg-rose-50 text-rose-700 border-rose-100'
            }`}
          >
            <span className="text-lg">{state.ok ? '✅' : '❌'}</span>
            <p>{state.message} (Status: {state.status})</p>
          </div>
        )}
      </div>
    </div>
  );
}