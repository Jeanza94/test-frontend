import { FC } from "react"
import { ProductDetailed } from "../interfaces/product"
import { ItemDescription } from "../interfaces/freeMarket"
import { mapFreeMarketItemDescriptionToProduct } from "../utils/freeMarketProductMapper"
import ProductCardDetailed from "./ProductCardDetailed"

interface PropsProductCardContainerDetailedProduct {
  productId: string
}

const ProductCardContainerDetailedProduct:FC<PropsProductCardContainerDetailedProduct> = async({productId}) => {


  let productDetailed: ProductDetailed
  try {
    const resp = await fetch(`http://localhost:8000/api/items/${productId}`, {
      next: {revalidate: 3600 * 24}
    })
    const itemDescription = await resp.json() as ItemDescription
    productDetailed = mapFreeMarketItemDescriptionToProduct(itemDescription)
  } catch (error) {
    console.log(error)
    throw new Error('Error ProductCardContainerDetailedProduct')
  }
  return (
    <section className="h-full px-2 mt-6 flex justify-center items-center">
      <ProductCardDetailed product={productDetailed}/>
    </section>
  )
}

export default ProductCardContainerDetailedProduct