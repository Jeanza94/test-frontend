import { FC, InputHTMLAttributes } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input:FC<CustomInputProps>= (props) => {
  return (
    <input
      className='w-full p-2 text-xs tablet:text-sm focus:outline-none' 
      {
        ...props
      }
    />
  )
}

export default Input