import { FC } from "react"
import { FreeMarketResponseProducts } from '../interfaces/freeMarket';
import { mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper";
import ProductCard from "./ProductCard";

interface PropProductContainerItemsPage {
  query?: string,
  limit?: string
}

const fetchData = async({limit, query}:PropProductContainerItemsPage) => {
  console.log(limit, query)
  let url = 'http://localhost:8000/api/items'
  if(limit && !isNaN(Number(limit))) {
    url += `?limit=${limit}` 
  }
  if(query && !(query.trim().length === 0)) {
    url +=  `${url.match(/\?/) ? '&' : '?'}q=${query}`  
  } 
  console.log(url)
  try {
    const resp = await fetch(url)
    const freeMarketResponseProducts = await resp.json() as FreeMarketResponseProducts
    const products = freeMarketResponseProducts.items.map(item => mapFreeMarketItemToProduct(item))
    return products
  } catch (error) {
    console.log(error)
    throw new Error('Error fetchData ProductContainerItemsPage')
  }
}

const ProductCardContainerItemsPage:FC<PropProductContainerItemsPage> = async({limit, query}) => {
  const products = await fetchData({limit, query})
  return (
    <section>
      {
        products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))
      }
    </section>
  )
}

export default ProductCardContainerItemsPage