import RegisterForm from '@/components/auth/RegisterForm'
import React from 'react'
import sectionBg from '@/assets/images/login-bg.jpeg'
import Link from 'next/link'

function Register() {
  return (<div className='flex flex-col md:flex-row justify-stretch'>
    <div className='bg-cover bg-center min-h-80 basis-1/3' style={{ backgroundImage: `url(${sectionBg.src})` } }>

    </div>
    <div className='flex flex-col justify-center p-12 flex-grow'>
      <h1 className='font-gerbil text-dark text-heading-1 mb-3'>Sign Up</h1>
      <p className="text-xl">Already have an account?
        <Link href='/Register' className='weight-bold text-primary ml-2 inline-block underline'>
        Log in</Link></p>
    <RegisterForm />
    </div>
  </div>
  )
}

export default Register