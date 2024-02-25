import { fetchProducts } from "../actions"
import ProductCard from "./ProductCard"

const ProductCardContainerHome = async() => {
  const { products } = await fetchProducts({})
  return (
    <section className="mt-4 flex flex-wrap gap-4 justify-center px-2">
      {
        products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))
      }
    </section>
  )
}

export default ProductCardContainerHome