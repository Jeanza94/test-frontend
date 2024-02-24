import { FC } from "react"
import Image from "next/image"
import { Product } from "../interfaces/product"
import Link from "next/link"

interface PropsProductCard {
  product: Product
}

const ProductCard:FC<PropsProductCard> = ({product}) => {
  return (
    <div className="w-full border-2 rounded-xl p-2 tablet:w-60 flex flex-col gap-2 hover:scale-105 transition all ease-in duration-200">
      <picture className="w-full flex justify-center">
        <Image 
          src={product.image}
          alt={`Product ${product.title}`}
          width={90}
          height={90}
          className="w-20 tablet:w-32 h-auto"
        />
      </picture>
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

      <Link 
        href={`/items/${product.id}`}
        className="text-xs text-secondary-base text-center"
        title={`Ver producto ${product.id}`}
      >
        Ver detalle
      </Link>
    </div>
  )
}

export default ProductCard