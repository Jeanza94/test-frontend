import { Suspense } from "react"
import ProductCardContainerItemsPage from "./components/ProductCardContainerItemsPage"

interface PropsItemsPage {
  searchParams: {
    q?: string,
    limit?: string
  }
}

const ItemsPage = ({searchParams}: PropsItemsPage) => {
  
  const {q, limit} = searchParams
  return (
    <div>
      <Suspense key={`product${q ? q : '' }`} fallback={<p>cargando</p>}>
        <ProductCardContainerItemsPage 
          query={q}
          limit={limit}
          key={`item${q}`}
        />
      </Suspense>
    </div>
  )
}

export default ItemsPage