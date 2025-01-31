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

    return auth ? <h1>Welcome to your Account</h1> : <h1>Please log in</h1>;
};

export default Account;