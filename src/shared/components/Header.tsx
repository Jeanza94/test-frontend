
import React from 'react'
import Image from 'next/image'
import FormSearchProducts from '@/products/components/FormSearchProducts'

const Header = () => {
  return (
    <header className='bg-primary py-2 px-8 h-28 tablet:h-14'>
      <nav 
        className='flex flex-col tablet:flex-row justify-center desktop:justify-between items-center gap-4'
      >
        <picture>
          <Image 
            src={'/images/logo-mercado-libre.webp'}
            className='h-8 w-auto'
            alt='Logo mercado libre'
            width={134}
            height={34}
            sizes='134px'
          />
        </picture>
        <FormSearchProducts />
      </nav>
    </header>
  )
}

export default Header