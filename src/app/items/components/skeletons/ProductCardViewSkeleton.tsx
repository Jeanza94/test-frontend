
const ProductCardViewSkeleton = () => {
  return (
    <div className="flex flex-col p-4 items-center gap-6 tablet:flex-row">
      <div className="w-36 h-36 animate-pulse rounded-xl bg-gray-500 px-4"></div>
      <div className="flex flex-col gap-2 animate-pulse w-full">
        <div className="w-28 h-5 animate-pulse bg-gray-500"></div>
        <div className="w-96 h-10 animate-pulse bg-gray-500"></div>
      </div>
      <div className="w-28 h-5 animate-pulse bg-gray-500"></div>
    </div>
  )
}

export default ProductCardViewSkeleton