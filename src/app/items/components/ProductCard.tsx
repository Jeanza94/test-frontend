import Image from "next/image"
import { Product } from "../interfaces/product"
import { FC } from "react"

interface PropsProductCard {
  product: Product
}

const ProductCard:FC<PropsProductCard> = ({product}) => {
  return (
    <div>
      <picture>
        <Image 
          src={product.image}
          alt={`Product ${product.title}`}
        />
      </picture>
      <p>{product.title}</p>
    </div>
  )
}

export default ProductCard