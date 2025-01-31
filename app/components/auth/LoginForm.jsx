"use client";
import { useState } from 'react';
import Validation from '../Validation';
import { MoveUpRight } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccess('Login successful');
        setEmail('');
        setPassword('');
        // Redirect or update state
        window.location.href = '/Account';
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin} className='group mt-8 pt-8 mb-2 w-full relative' noValidate>
      {error && <p className="absolute left-0 top-0 text-red-800">{error}</p>}
      {success && <p  className="absolute left-0 top-0 text-green-800">{success}</p>}
      <div className='mb-4 flex flex-col w-full [&_input]:bg-transparent [&_input]:border-b [&_input]:border-dark [&_input]:mb-3 text-dark'>
        <div className='w-full flex flex-col'>
          <label htmlFor='email'>
            { " " }
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=''
            className='peer outline-none mail invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
            pattern={`[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`}
          />
          <Validation message='Please enter a valid email address' />
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=''
            className='peer outline-none mail invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
          />
          <Validation message='Please enter a valid email address' />
        </div>
      </div>
                    <button
                      className='w-40 h-40 text-white
 flex items-center justify-center gap-3 rounded-full bg-gold group-invalid:pointer-events-none '
                      type='submit'>
                      Log in <MoveUpRight />
                    </button>
    </form>
  );
};

export default LoginForm;