import { Suspense } from "react"
import ProductCardContainerItemsPage from "./components/ProductCardContainerItemsPage"
import ProductCardContainerItemsPageSkeleton from "./components/skeletons/ProductCardContainerItemsPageSkeleton"

interface PropsItemsPage {
  searchParams: {
    q?: string,
    limit?: string
  }
}

const ItemsPage = ({searchParams}: PropsItemsPage) => {
  
  const {q, limit} = searchParams
  return (
    <>
      <Suspense fallback={<ProductCardContainerItemsPageSkeleton />}>
        <ProductCardContainerItemsPage 
          query={q}
          limit={limit}
          key={`item${q}`}
        />
      </Suspense>
      
    </>
  )
}

export default ItemsPage