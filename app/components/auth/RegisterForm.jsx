"use client";
import React, { useState } from 'react';
import Validation from '../Validation';
import { MoveUpRight } from 'lucide-react';
import Loader from '../Loader';
function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      if (response.ok) {
        setSuccess('User registered successfully');
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className='group mt-8 pt-8 mb-2 w-full relative' noValidate>
    {loading && <div className='flex items-center justify-center w-full absolute left-0 top-0'>
        <Loader />
      </div>}
      {error && <p className="absolute left-0 top-0 text-red-800">{error}</p>}
      {success && <p className="absolute left-0 top-0 text-green-800">{success}</p>}
      <div className='mb-4 flex flex-col w-full [&_input]:bg-transparent [&_input]:border-b [&_input]:border-dark [&_input]:mb-3 text-dark'>
        <div className='w-full flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder=''
            className='peer outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
          />
          <Validation message='Please enter your name' />
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='email'>Email Address</label>
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
          <label htmlFor='phone'>Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder=''
            className='peer outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
            pattern='.{7,}'
          />
          <Validation message='Please enter a valid phone number' />
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=''
            className='peer outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
          />
          <Validation message='Please enter a valid password' />
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder=''
            className='peer outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
          />
          <Validation message='Passwords do not match' />
        </div>
      </div>
      <button
        className='w-40 h-40 text-white flex items-center justify-center gap-3 rounded-full bg-gold group-invalid:pointer-events-none'
        type='submit'>
        Sign Up <MoveUpRight />
      </button>
    </form>
  );
}

export default RegisterForm;