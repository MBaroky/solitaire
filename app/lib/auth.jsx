import { parse } from 'cookie';

export function getSessionToken(cookieString) {
  const cookies = parse(cookieString || '');
  return cookies.session_token;
}

export function requireAuth(handler) {
  return async (req, res) => {
    const sessionToken = getSessionToken(req.headers?.cookie);

    if (!sessionToken) {
      return {
        redirect: {
          destination: '/Login',
          permanent: false,
        },
      };
    }

    const response = await fetch('/api/auth/validate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionToken }),
    });

    if (!response.ok) {
      return {
        redirect: {
          destination: '/Login',
          permanent: false,
        },
      };
    }

    const data = await response.json();
    req.user = data.user;

    return handler(req, res);
  };
}