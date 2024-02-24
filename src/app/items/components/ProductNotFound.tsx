import React from 'react'

const ProductNotFound = () => {
  return (
    <section className='h-96 flex justify-center items-center'>
      <div className='bg-secondary-light h-40 rounded-xl p-10'>
        <span className='text-white text-center block text-4xl font-bold'>404</span>
        <h3 className='text-white font-semibold'>Lo sentimos, no se encontró el producto que buscabas, vuelve a intentarlo</h3>
      </div>

    </section>
  )
}

export default ProductNotFound