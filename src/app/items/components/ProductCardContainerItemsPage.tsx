import { FC } from "react"
import { FreeMarketResponseProducts } from '../interfaces/freeMarket';
import { mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper";
import ProductCardView from "./ProductCardView";

interface PropProductContainerItemsPage {
  query?: string,
  limit?: string
}

const fetchData = async({limit, query}:PropProductContainerItemsPage) => {
  let url = 'http://localhost:8000/api/items'
  if(limit && !isNaN(Number(limit))) {
    url += `?limit=${limit}` 
  }
  if(query && !(query.trim().length === 0)) {
    url +=  `${url.match(/\?/) ? '&' : '?'}q=${query}`  
  } 
  try {
    const resp = await fetch(url)
    const freeMarketResponseProducts = await resp.json() as FreeMarketResponseProducts
    const products = freeMarketResponseProducts.items.map(item => mapFreeMarketItemToProduct(item))
    return {products, categories: freeMarketResponseProducts.categories}
  } catch (error) {
    console.log(error)
    throw new Error('Error fetchData ProductContainerItemsPage')
  }
}

const ProductCardContainerItemsPage:FC<PropProductContainerItemsPage> = async({limit, query}) => {
  const {products, categories} = await fetchData({limit, query})
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