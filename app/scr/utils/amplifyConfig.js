import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-2_KblsbxFOy',
      userPoolClientId: '1k3mpm9tbsmp96m9q2qjp4j438', // Found in App Integration
      loginWith: {
        oauth: {
          domain: 'us-east-2kblsbxfoy.auth.us-east-2.amazoncognito.com',
          scopes: ['openid', 'email', 'profile'],
          redirectSignIn: ['http://localhost:3000/homePage'],
          redirectSignOut: ['http://localhost:3000/'],
          responseType: 'code' // This must match your "code=" URL
        }
      }
    }
  }
});