import { FC } from "react"
import { Product } from "../interfaces/product"
import Link from "next/link"
import ProductPicture from "./ProductPicture"
import ProductLink from "./ProductLink"
import ProductPriceTitle from "./ProductPriceTitle"

interface PropsProductCardView {
  product: Product
}

const ProductCardView: FC<PropsProductCardView> = ({product}) => {
  return (
    <div className="flex flex-col p-4 items-center gap-6 tablet:flex-row">
      <ProductPicture productImage={product.image}/>
      <ProductPriceTitle 
        productPrice={product.price} 
        productTitle={product.title}
        containerClassName="flex-col-reverse"
        titleClassName="text-sm"
        spanClassName="text-xl"
      />
      <ProductLink productId={product.id}/>
    </div>
  )
}

export default ProductCardView