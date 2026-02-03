
import { API_ENDPOINTS } from '@/lib/constants';
import { fetchAuthSession } from 'aws-amplify/auth';


export async function createUserBasicInformation(data: any) {
  try {
    // 1. Obtienes el token directamente del navegador
    const session = await fetchAuthSession();
    const token = session.tokens?.idToken?.toString();

    // 2. Llamada directa
    const response = await fetch(API_ENDPOINTS.USERS.CREATE, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("Error calling API Gateway:", error);
    throw error;
  }
}