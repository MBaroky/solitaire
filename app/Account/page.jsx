"use client"
import { getSessionToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AccountPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const sessionToken = getSessionToken(document.cookie);

    if (!sessionToken) {
      router.push('/Login');
    } else {
      // Validate the session token using the auth/validate API route
      fetch('/api/auth/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionToken }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            setIsAuthenticated(true);
          } else {
            router.push('/login');
          }
        })
        .catch(() => {
          router.push('/login');
        });
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1>Account Page</h1>
      <p>You are authenticated!</p>
    </div>
  );
};

export default AccountPage;