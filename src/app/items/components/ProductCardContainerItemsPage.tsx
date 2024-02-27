import { FC } from "react"
import { FreeMarketResponseProducts } from '../interfaces/freeMarket';
import { mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper";
import ProductCardView from "./ProductCardView";
import ProductNotFound from "./ProductNotFound";
import { fetchProducts } from "../actions";
import PaginatorProducts from "./PaginatorProducts";

interface PropProductContainerItemsPage {
  query?: string,
  limit?: string,
  offset?: string
}



const ProductCardContainerItemsPage:FC<PropProductContainerItemsPage> = async({limit='4', query='', offset='0'}) => {
  const {products, categories, hasNextPage, totalPages} = await fetchProducts({limit, query, offset})

  if(products.length === 0) return <ProductNotFound />
  
  const categoryDescription = categories.toString().replace(/,/g, ' > ')
  
  return (
    <section className="mt-2 tablet:px-20">
      <span className="text-xs text-gray-500 ps-2">{categoryDescription}</span>
      <div className="border-[1px] border-gray-50 ps-2">
        {
          products.map((product, i) => (
            <div key={product.id}>
              <ProductCardView product={product}/>
              {
                <hr className={`border-b-[1px] border-b-gray-50 ${products.length - 1 === i ? 'hidden' : ''}`}/>
              }
            </div>
          ))
        }
      </div>
      <PaginatorProducts 
        totalPages={totalPages!} 
        limit={isNaN(Number(limit)) ? 4 : Number(limit)} 
        offset={isNaN(Number(offset)) ? 0 : Number(offset)} 
        hasNextPage={hasNextPage!}
        query={query!}
      />
    </section>
  )
}

export default ProductCardContainerItemsPage