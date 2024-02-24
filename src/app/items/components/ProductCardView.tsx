import { FC } from "react"
import { Product } from "../interfaces/product"
import Link from "next/link"
import ProductPicture from "./ProductPicture"
import ProductLink from "./ProductLink"

interface PropsProductCardView {
  product: Product
}

const ProductCardView: FC<PropsProductCardView> = ({product}) => {
  return (
    <div>
      <ProductPicture productImage={product.image}/>
      <div>
        <h5>{product.price}</h5>
        <p>{product.title}</p>
      </div>
      <ProductLink productId={product.id}/>
    </div>
  )
}

export default ProductCardView