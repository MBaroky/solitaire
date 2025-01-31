"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { parse } from 'cookie';

const Account = () => {
    const router = useRouter();
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const cookies = parse(document.cookie || '');
        const token = cookies.token;

        if (token) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    const handleLogout = async () => {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
        });

        if (response.ok) {
            setAuth(false);
            router.push('/Login');
        } else {
            console.error('Failed to log out');
        }
    };

    return auth ? (
        <div>
            <h1>Welcome to your Account</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    ) : (
        <h1>Please log in</h1>
    );
};

export default Account;