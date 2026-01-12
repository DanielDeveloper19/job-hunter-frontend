// actions.ts
'use server' // This tells Next.js: "Run this ONLY on the server"

export async function createUserAction(prevState: any, formData: FormData) {
  
  const data = Object.fromEntries(formData.entries());
  
  const response = await fetch('http://localhost:8080/profile_service/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
 return {
    status: response.status,
    ok: response.ok,
    message: response.ok ? "User created!" : "Failed to create user."
  };
}