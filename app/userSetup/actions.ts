// actions.ts
'use server' // This tells Next.js: "Run this ONLY on the server"

import { API_ENDPOINTS } from '@/lib/constants';

export async function createUserAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(API_ENDPOINTS.USERS.CREATE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      // Optional: Add a timeout so the request doesn't hang forever
      signal: AbortSignal.timeout(5000), 
    });

    // Handle 400 or 500 errors from the backend
    if (!response.ok) {
      return {
        status: response.status,
        ok: false,
        message: `Backend Error: ${response.statusText}`,
      };
    }

    return {
      status: 201,
      ok: true,
      message: "User created successfully!",
    };

  } catch (error) {
    // Handle Network crashes, timeouts, or DNS issues
    console.error("Submission failed:", error);
    
    return {
      status: 500,
      ok: false,
      message: "Could not connect to the server. Please check your connection.",
    };
  }
}