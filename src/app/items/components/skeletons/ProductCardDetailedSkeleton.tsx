
const ProductCardDetailedSkeleton = () => {
  return (
    <div className="w-full tablet:w-[600px] desktop:w-[800px] border-2 border-gray-100 rounded-sm p-4">
      <div className="flex flex-col gap-y-6 gap-x-36 items-center tablet:flex-row tablet:justify-center">
        <div className="w-40 h-40 bg-gray-400 animate-pulse rounded-xl"></div>
        <div className="text-sm flex flex-col w-full gap-2 tablet:w-52 ">
          <div className="h-4 w-24 animate-pulse bg-gray-500"></div>
          <div className="w-28 h-5 animate-pulse bg-gray-500"></div>
          <div className="w-52 tablet:w-full h-6 animate-pulse bg-gray-500"></div>
          <div className="w-52 tablet:w-full h-6 animate-pulse bg-gray-500"></div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <div className="h-6 w-80 bg-gray-500 animate-pulse"></div>
        <div className="h-40 w-full bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  )
}

export default ProductCardDetailedSkeleton