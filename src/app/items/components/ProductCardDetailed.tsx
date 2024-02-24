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
    <div className="w-full tablet:w-[600px] desktop:w-[800px] border-2 border-gray-100 rounded-sm p-4">
      <div className="flex flex-col gap-y-2 gap-x-36 items-center tablet:flex-row tablet:justify-center">
        <picture className="flex justify-center">
          <Image 
            src={image}
            alt={`product ${id}`}
            width={90}
            height={90}
            className="w-40 h-auto"
          />
        </picture>
        <div className="text-sm flex flex-col gap-2 tablet:w-52 ">
          <h5 className="font-medium">
            {condition} - {totalSelled} vendidos
          </h5>
          <h3 className="text-lg font-bold">
            {title}
          </h3>
          <span className="block font-extrabold text-3xl">
            $ {price}
          </span>
          <button className="bg-secondary-base text-white p-2 hover:bg-secondary-light active:bg-secondary-dark transition-colors ease-in duration-200">
            Comprar
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">
          Descripción del producto
        </h2>
        <p className="text-gray-500 text-justify">
          {description ? description : 'No existe una descripción del producto'}
        </p>
      </div>
    </div>
  )
}

export default ProductCardDetailed