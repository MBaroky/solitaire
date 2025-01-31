import LoginForm from '@/components/auth/LoginForm'
import sectionBg from '@/assets/images/login-bg.jpeg'
import React from 'react'
import Link from 'next/link'

function Login() {
  return (
    <div className='flex flex-col md:flex-row justify-stretch'>
      <div className='bg-cover bg-center min-h-80 basis-1/3' style={{ backgroundImage: `url(${sectionBg.src})` } }>

      </div>
      <div className='flex flex-col justify-center p-12 flex-grow'>
        <h1 className='font-gerbil text-dark text-heading-1 mb-3'>Log in</h1>
        <p className="text-xl">Don’t have an account yet?
          <Link href='/Register' className='weight-bold text-primary ml-2 inline-block underline'>
          Sign Up</Link></p>
        <LoginForm />
        {/* TODO: add login with social network component */}
      </div>
    </div>
  )
}

export default Login