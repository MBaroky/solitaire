import React from 'react'
import google from '@/assets/images/google.png'
import microsoft from '@/assets/images/microsoft.png'
import apple from '@/assets/images/apple.png'

function LoginIcon({ src, alt }) {
  return (


    <button className='bg-primary flex items-center justify-center w-20 p-6 aspect-square rounded-full border border-dark text-white py-2 '>
    <img className='max-w-full ' src={src} alt={alt || ''} />
  </button>
  )
}

function LoginIcons() {
    const icons = [google.src, apple.src, microsoft.src]
  return (
    <>

            <div className="relative my-3">
              <hr className='w-full border-0 h-[1px] bg-dark' />
              <p className='text-xl font-gerbil inline-block bg-background text-dark absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] px-3'>Or</p>
            </div>
            <p className='text-xl my-3'>
            Continue with
            </p>
    <div className='flex flex-row gap-3'>
    {icons?.map((icon, i) => (
      <LoginIcon key={i} src={icon} />
    ))}
  </div>
    </>
  )
}

export default LoginIcons