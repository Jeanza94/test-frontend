import { FC } from "react"
import Image from "next/image"

interface PropsProductPicture {
  productImage: string
}

const ProductPicture: FC<PropsProductPicture> = ({productImage}) => {
  return (
    <picture className="flex justify-center">
      <Image 
        src={productImage}
        alt='Imagen producto'
        width={90}
        height={90}
        className="w-40 h-auto rounded-lg"
      />
    </picture>
  )
}

export default ProductPicture