// pages/api/login.js
import { createClient } from 'edgedb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

const client = createClient();
const jwtSecret = process.env.JWT_SECRET;

export async function POST(req) {
    if (req.method === 'POST') {
        const { email, password } = await req.json();

        const user = await client.querySingle(`
      SELECT User {
        id,
        email,
        password_hash
      }
      FILTER .email = <str>$email
        `, { email });

        if (user && bcrypt.compareSync(password, user.password_hash)) {
            const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

            const response = NextResponse.json({ success: true });
            response.headers.set('Set-Cookie', serialize('token', token, {
                httpOnly: false,
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60,
                path: '/',
            }));
            await client.execute(`
              INSERT Session {
                token := <str>$sessionToken,
                user := (SELECT User FILTER .id = <uuid>$userId)
              }
            `, { sessionToken: token, userId: user.id });
            return response;
        } else {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }
    } else {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
}