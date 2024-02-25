import { FC } from "react"
import { FreeMarketResponseProducts } from '../interfaces/freeMarket';
import { mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper";
import ProductCardView from "./ProductCardView";
import ProductNotFound from "./ProductNotFound";
import { fetchProducts } from "../actions";

interface PropProductContainerItemsPage {
  query?: string,
  limit?: string
}



const ProductCardContainerItemsPage:FC<PropProductContainerItemsPage> = async({limit, query}) => {
  const {products, categories} = await fetchProducts({limit, query})

  if(products.length === 0) return <ProductNotFound />
  
  const categoryDescription = categories.toString().replace(/,/g, ' > ')
  
  return (
    <section className="mt-2 tablet:px-20">
      <span className="text-xs text-gray-500">{categoryDescription}</span>
      <div className="border-[1px] border-gray-50">
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
    </section>
  )
}

export default ProductCardContainerItemsPage