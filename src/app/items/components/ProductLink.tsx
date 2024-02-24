import Link from "next/link"
import { FC } from "react"

interface PropsProductLink {
  productId: string
}

const ProductLink:FC<PropsProductLink> = ({productId}) => {
  return (
    <Link 
      href={`/items/${productId}`}
      className="text-xs text-secondary-base text-center"
      title={`Ver producto ${productId}`}
    >
      Ver detalle
    </Link>
  )
}

export default ProductLink