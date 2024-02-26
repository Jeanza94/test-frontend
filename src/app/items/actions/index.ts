import { envs } from "../../../../config/envs"
import { FreeMarketResponseProducts, ItemDescription } from "../interfaces/freeMarket"
import { mapFreeMarketItemDescriptionToProduct, mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper"

const url = envs.API_URL
// const revalidate = 86400

export const fetchProducts = async({limit, query='futbol'}:{limit?: string, query?: string}) => {
  let urlProducts = `${url}/items`
  if(limit && !isNaN(Number(limit))) {
    urlProducts += `?limit=${limit}` 
  }
  if(query && !(query.trim().length === 0)) {
    urlProducts +=  `${urlProducts.match(/\?/) ? '&' : '?'}q=${query}`  
  }
  try {
    const resp = await fetch(urlProducts)
    const freeMarketResponseProducts = await resp.json() as FreeMarketResponseProducts
    const products = freeMarketResponseProducts.items.map(item => mapFreeMarketItemToProduct(item))
    return {products, categories: freeMarketResponseProducts.categories}
  } catch (error) {
    console.log(error)
    throw new Error('Error fetchProducts')
  }
}

export const fetchProductById = async(id: string) => {
  const urlProduct = `${url}/items/${id}`
  try {
    const resp = await fetch(urlProduct)
    const itemDescription = await resp.json() as ItemDescription
    return mapFreeMarketItemDescriptionToProduct(itemDescription)
  } catch (error) {
    console.log(error)
    throw new Error('Error ProductCardContainerDetailedProduct')
  }
}