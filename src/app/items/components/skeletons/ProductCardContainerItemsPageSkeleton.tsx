import ProductCardViewSkeleton from "./ProductCardViewSkeleton"

const ProductCardContainerItemsPageSkeleton = () => {
  return (
    <div className="mt-2 tablet:px-20">
      <div className=""></div>
      <div className="border-[1px] border-gray-50">
        {
          [1,2,3].map(item => (
            <div key={item}>
              <ProductCardViewSkeleton/>
              <hr />
            </div>
          ))
        }
      </div>
    </div>    
  )
}

export default ProductCardContainerItemsPageSkeleton