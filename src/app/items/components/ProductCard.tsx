import { FC } from "react"
import Image from "next/image"
import { Product } from "../interfaces/product"
import ProductPicture from "./ProductPicture"
import ProductLink from "./ProductLink"

interface PropsProductCard {
  product: Product
}

const ProductCard:FC<PropsProductCard> = ({product}) => {
  return (
    <div className="w-full border-2 rounded-xl p-2 tablet:w-60 flex flex-col gap-2 hover:scale-105 transition all ease-in duration-200">
      <ProductPicture productImage={product.image}/>
      <p 
        className="text-sm text-center text-gray-500 mobile:hidden tablet:block"
        title={product.title}
      >
        {product.title.length > 40 ? `${product.title.substring(0,50)}...`: product.title}
      </p>
      <p 
        className="text-sm text-center text-gray-500 tablet:hidden"
        title={product.title}
      >
        {product.title}
      </p>

      <ProductLink productId={product.id}/>
    </div>
  )
}

export default ProductCard