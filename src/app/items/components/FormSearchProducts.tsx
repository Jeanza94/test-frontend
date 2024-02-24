'use client'
import SearchLogo from '@/app/shared/components/SearchLogo'
import Input from '@/app/shared/components/Input'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

const FormSearchProducts = () => {
  
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!inputRef.current) return
    const query = inputRef.current.value
    let url = '/items'
    if(query.trim().length > 0) {
      url += `?q=${query}`
    }
    router.push(url)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='w-100% tablet:w-96 flex hover:border-[1px] hover:border-secondary-base  transition-colors ease-in duration-200'>
          <Input 
            type='text'
            placeholder='Nunca dejes de buscar'
            ref={inputRef}
          />
          <button 
            className='p-2 bg-slate-100 hover:bg-slate-400 transition-colors ease-in duration-200'
            title='Buscar productos'
            type='submit'
          >
            <SearchLogo />
          </button>
        </label>
    </form>
  )
}

export default FormSearchProducts