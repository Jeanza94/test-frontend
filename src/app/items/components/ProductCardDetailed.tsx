import { FC } from "react"
import Image from "next/image"
import { ProductDetailed } from "../interfaces/product"

interface PropsProductCardDetailed {
  product: ProductDetailed
}

const ProductCardDetailed: FC<PropsProductCardDetailed> = ({product}) => {
  const {
    condition, 
    description,
    id, 
    image, 
    price, 
    title, 
    totalSelled
  } = product

  return (
    <div>
      <picture>
        <Image 
          src={image}
          alt={`product ${id}`}
          width={90}
          height={90}
        />
      </picture>
      <div>
        <h5>{condition} - {totalSelled} vendidos</h5>
        <h3>{title}</h3>
        <span>{price}</span>
        <button>Comprar</button>
      </div>
      <div>
        <h2>Descripción del producto</h2>
        <p>{description ? description : 'No existe una descripción del producto'}</p>
      </div>
    </div>
  )
}

export default ProductCardDetailed