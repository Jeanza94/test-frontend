import { Suspense } from "react"
import ProductCardContainerItemsPage from "./components/ProductCardContainerItemsPage"
import ProductCardContainerItemsPageSkeleton from "./components/skeletons/ProductCardContainerItemsPageSkeleton"
import { Metadata } from "next"

interface PropsItemsPage {
  searchParams: {
    q?: string,
    limit?: string
    offset?: string
  }
}
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: "Busca los mejores productos de la red.",
  description: "Explora nuestra amplia selección de productos de alta calidad. Encuentra todo lo que necesitas en un solo lugar. ¡Descubre ofertas irresistibles y haz tus compras en línea hoy mismo!",
  robots: {
    index: true,
    follow: true
  }
};

const ItemsPage = ({searchParams}: PropsItemsPage) => {
  
  const {q, limit, offset} = searchParams
  return (
    <>
      <Suspense fallback={<ProductCardContainerItemsPageSkeleton />}>
        <ProductCardContainerItemsPage 
          query={q}
          limit={limit}
          offset={offset}
          key={`item${q}${offset}`}
        />
      </Suspense>
    </>
  )
}

export default ItemsPage