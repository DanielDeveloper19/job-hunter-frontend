'use client'

import { useActionState } from 'react'; // Note: In older React 18 versions, this is 'useFormState' from 'react-dom'
import { createUserAction } from '../actions';

export default function Page() {
  // 1. Wrap your action in useActionState
  // state: holds the { status, ok, message } returned by your action
  // formAction: a specialized version of your action that satisfies TypeScript
  const [state, formAction, isPending] = useActionState(createUserAction, {
    status: 0,
    ok: false,
    message: ''
  });

  return (
    <div className="p-4">
      {/* 2. Pass the 'formAction' from the hook, NOT the original function */}
      <form action={formAction} className="flex flex-col gap-4">
        <input name="fullName" placeholder="Full Name" required className="border p-2" />
        <input name="email" type="email" placeholder="Email" required className="border p-2" />
        
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isPending ? 'Submitting...' : 'Create User'}
        </button>
      </form>

      {/* 3. Display the response status safely */}
      {state.message && (
        <p className={`mt-4 ${state.ok ? 'text-green-600' : 'text-red-600'}`}>
          {state.message} (Status: {state.status})
        </p>
      )}
    </div>
  );
}