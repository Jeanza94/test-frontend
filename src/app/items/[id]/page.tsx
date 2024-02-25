import { Suspense } from 'react';
import ProductCardContainerDetailedProduct from '../components/ProductCardContainerDetailedProduct';
import ProductCardContainerDetailedProductSkeleton from '../components/skeletons/ProductCardContainerDetailedProductSkeleton';
import { Metadata } from 'next';

interface PropsProductPageDetailed {
  params: {id: string}
}

export const generateMetadata = ({params}: PropsProductPageDetailed): Metadata => {
  return {
    title: `Producto con el id ${params.id}`,
    robots: {
      follow: true,
      index: true
    }
  }
}

const ProductPageDetailed = async({params}: PropsProductPageDetailed) => {
  const id = params.id
  if(!id || !id.startsWith("MLA")) throw new Error('Ese producto no existe')

  return (
    <>
      <Suspense fallback={<ProductCardContainerDetailedProductSkeleton />}>
        <ProductCardContainerDetailedProduct productId={id}/>
      </Suspense>
      
    </>
  )
}

export default ProductPageDetailed