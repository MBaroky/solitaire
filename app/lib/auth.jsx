// import { parse, serialize } from 'cookie';

// export function getSessionToken(cookieString) {
//   const cookies = parse(cookieString || '');
//   console.log('cookies:', cookies);
//   return cookies.session_token;
// }

// export function setSessionToken(response, sessionToken) {
//   const cookie = serialize('session_token', sessionToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//     path: '/',
//   });
//   // response.headers.set('Set-Cookie', cookie);
//   localStorage.setItem('cookie', cookie);
// }

// export function requireAuth(handler) {
//   return async (req, res) => {
//     const sessionToken = getSessionToken(req.headers?.cookie);
//     console.log('sessionToken:', sessionToken);

//     if (!sessionToken) {
//       console.log(req.headers)
//       // return {
//       //   redirect: {
//       //     destination: '/Login',
//       //     permanent: false,
//       //   },
//       // };
//     }

//     const response = await fetch('/api/auth/validate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ sessionToken }),
//     });

//     if (!response.ok) {
//       console.error('Session validation failed:', response.statusText);
//       // return {
//       //   redirect: {
//       //     destination: '/Login',
//       //     permanent: false,
//       //   },
//       // };
//     }

//     const data = await response.json();
//     req.user = data.user;

//     return handler(req, res);
//   };
// }