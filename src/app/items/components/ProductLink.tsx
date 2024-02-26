import Link from "next/link"
import { FC } from "react"

interface PropsProductLink {
  productId: string
}

const ProductLink:FC<PropsProductLink> = ({productId}) => {
  return (
    <Link 
      href={`/items/${productId}`}
      className="text-xs text-secondary-base text-center hover:text-secondary-dark hover:font-bold transition-all ease-in duration-200"
      title={`Ver producto ${productId}`}
    >
      Ver detalle
    </Link>
  )
}

export default ProductLink