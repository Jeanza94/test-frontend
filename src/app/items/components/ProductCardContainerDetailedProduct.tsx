import { FC } from "react"
import ProductCardDetailed from "./ProductCardDetailed"
import { fetchProductById } from "../actions"

interface PropsProductCardContainerDetailedProduct {
  productId: string
}

const ProductCardContainerDetailedProduct:FC<PropsProductCardContainerDetailedProduct> = async({productId}) => {

  const productDetailed = await fetchProductById(productId) 

  return (
    <section className="h-full px-2 mt-6 flex justify-center items-center">
      <ProductCardDetailed product={productDetailed}/>
    </section>
  )
}

export default ProductCardContainerDetailedProduct