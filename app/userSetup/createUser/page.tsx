'use client'

import { useState } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { API_ENDPOINTS } from '@/lib/constants';

export default function Page() {
  // We use local state to mimic the behavior of useActionState
  const [state, setState] = useState({ status: 0, ok: false, message: '' });
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setState({ status: 0, ok: false, message: '' }); // Reset state

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // 1. Get the JWT from the browser (Client-side)
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();

      if (!token) throw new Error("No active session found. Please log in.");

      // 2. Call API Gateway
      const response = await fetch(API_ENDPOINTS.USERS.CREATE, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setState({ 
          status: response.status, 
          ok: false, 
          message: data.message || "Backend Error" 
        });
      } else {
        setState({ 
          status: 201, 
          ok: true, 
          message: "User preferences saved successfully!" 
        });
      }
    } catch (error: any) {
      console.error("Submission failed:", error);
      setState({ 
        status: 500, 
        ok: false, 
        message: error.message || "Connection failed" 
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Let us get to know you better</h2>
          <p className="text-slate-500 text-sm">Introduce Your personal Info & Preferences.</p>
        </div>

        {/* Updated form: using onSubmit instead of action */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
            <input 
              name="fullName" 
              placeholder="John Doe" 
              required 
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
            />
          </div>

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

        {/* Feedback Message (same UI logic as before) */}
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