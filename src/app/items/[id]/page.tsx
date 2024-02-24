import ProductCardContainerDetailedProduct from '../components/ProductCardContainerDetailedProduct';

const ProductPageDetailed = async({params}: {params: {id: string}}) => {
  const id = params.id
  if(!id || !id.startsWith("MLA")) throw new Error('Ese producto no existe')

  return (
    <>
      <ProductCardContainerDetailedProduct productId={id}/>
    </>
  )
}

export default ProductPageDetailed