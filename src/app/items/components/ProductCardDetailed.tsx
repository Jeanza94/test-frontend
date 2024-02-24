import { FC } from "react"
import Image from "next/image"
import { ProductDetailed } from "../interfaces/product"
import Button from "@/app/shared/components/Button"
import ProductPicture from "./ProductPicture"
import ProductPriceTitle from "./ProductPriceTitle"

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
        <ProductPicture productImage={image} />
        <div className="text-sm flex flex-col gap-2 tablet:w-52 ">
          <h5 className="font-medium">
            {condition} - {totalSelled} vendidos
          </h5>
          <ProductPriceTitle productPrice={price} productTitle={title} />
          <Button text="comprar" title={`Comprar producto ${id}`}/>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">
          Descripción del producto
        </h2>
        <p className="text-gray-500 text-justify">
          {description ? description.replace(/=/g, '') : 'No existe una descripción del producto'}
        </p>
      </div>
    </div>
  )
}

export default ProductCardDetailed