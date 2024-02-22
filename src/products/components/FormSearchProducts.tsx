import React from 'react'
import SearchLogo from '@/shared/components/SearchLogo'
import Input from '@/shared/components/Input'

const FormSearchProducts = () => {
  return (
    <form>
      <label className='w-100% tablet:w-96 flex hover:border-[1px] hover:border-secondary  transition-colors ease-in duration-200'>
          <Input 
            type='text'
            placeholder='Nunca dejes de buscar'
          />
          <button className='p-2 bg-slate-100 hover:bg-slate-400 transition-colors ease-in duration-200'>
            <SearchLogo />
          </button>
        </label>
    </form>
  )
}

export default FormSearchProducts