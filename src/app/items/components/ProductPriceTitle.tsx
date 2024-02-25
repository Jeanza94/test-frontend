import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface PropsProductPriceTitle {
  productPrice: number,
  productTitle: string,
  containerClassName?: string,
  spanClassName?: string,
  titleClassName?: string,
}

const ProductPriceTitle:FC<PropsProductPriceTitle> = ({
  productPrice, 
  productTitle, 
  containerClassName,
  spanClassName,
  titleClassName
}) => {
  return (
    <div className={twMerge("flex flex-col gap-2 w-full", containerClassName)}>
      <h3 className={twMerge("text-lg font-medium", titleClassName)}>
        {productTitle}
      </h3>
      <span className={twMerge("block font-semibold text-3xl", spanClassName)}>
        $ {productPrice.toFixed(2)}
      </span>
    </div>
  )
}

export default ProductPriceTitle