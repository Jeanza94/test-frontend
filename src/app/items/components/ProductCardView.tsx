import { FC } from "react"
import { Product } from "../interfaces/product"
import Link from "next/link"
import ProductPicture from "./ProductPicture"

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
      <Link href={product.id}>
        ver detalle
      </Link>
    </div>
  )
}

export default ProductCardView