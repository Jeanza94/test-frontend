import { FreeMarketResponseProducts } from "../interfaces/freeMarket"
import { Product } from "../interfaces/product"
import { mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper"
import ProductCard from "./ProductCard"

const ProductCardContainerHome = async() => {
  let products: Product[] = []
  try {
    const resp = await fetch('http://localhost:8000/api/items')
    const freeMarketResponse = await resp.json() as FreeMarketResponseProducts
    products = freeMarketResponse.items.map(mapFreeMarketItemToProduct)
  } catch (error) {
    throw new Error('error ProductContainerHome')
  }
  return (
    <section className="mt-2 mb-2 flex flex-wrap gap-4 justify-center px-2">
      {
        products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))
      }
    </section>
  )
}

export default ProductCardContainerHome