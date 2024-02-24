import { Suspense } from 'react';
import ProductCardContainerDetailedProduct from '../components/ProductCardContainerDetailedProduct';
import ProductCardContainerDetailedProductSkeleton from '../components/skeletons/ProductCardContainerDetailedProductSkeleton';

const ProductPageDetailed = async({params}: {params: {id: string}}) => {
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