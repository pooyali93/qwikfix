import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24 bg-black-50 '>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[8%] md:flex-row'>
          <Link href='/' className='mt-10'> 
            <Image src="/qwik-logo.png" alt='logo' width={74} height={19}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'></div>
        </div>
      </div>

    </footer>
  )
}

export default Footer