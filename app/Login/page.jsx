import LoginForm from '@/components/auth/LoginForm'
import sectionBg from '@/assets/images/login-bg.jpeg'
import React from 'react'

function Login() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='bg-cover bg-center' style={{backgroundImage:`url(${sectionBg})`}}></div>
      <div>

      <LoginForm />
      </div>
    </div>
  )
}

export default Login