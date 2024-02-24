import { FC, ForwardRefExoticComponent, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Input:ForwardRefExoticComponent<CustomInputProps & { ref?: ForwardedRef<HTMLInputElement>}> = forwardRef(function CustomInputComponent({className,...props}, ref){
  return (
    <input
      className='w-full p-2 text-xs tablet:text-sm focus:outline-none'
      ref={ref}
      {
        ...props
      }
    />
  )
})

export default Input