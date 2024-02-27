import { envs } from "../../../../config/envs"
import { FreeMarketResponseProducts, ItemDescription } from "../interfaces/freeMarket"
import { mapFreeMarketItemDescriptionToProduct, mapFreeMarketItemToProduct } from "../utils/freeMarketProductMapper"

const url = envs.API_URL
// const revalidate = 86400

interface OptionsFetchProducts {
  limit?: string,
  query?: string,
  offset?: string
}

export const fetchProducts = async({limit, query='futbol', offset}:OptionsFetchProducts) => {
  let urlProducts = `${url}/items`
  if(limit && !isNaN(Number(limit))) {
    urlProducts += `?limit=${limit}` 
  }
  if(query && !(query.trim().length === 0)) {
    urlProducts +=  `${urlProducts.match(/\?/) ? '&' : '?'}q=${query}`  
  }
  if(offset && !(isNaN(Number(offset))) && Number(offset) < 1000) {
    urlProducts +=  `${urlProducts.match(/\?/) ? '&' : '?'}q=${offset}`  
  }
  
  try {
    const resp = await fetch(urlProducts)
    const freeMarketResponseProducts: FreeMarketResponseProducts | {message: string} = await resp.json()
    if('message' in freeMarketResponseProducts) return {products: [], categories: []}
    const products = freeMarketResponseProducts.items.map(item => mapFreeMarketItemToProduct(item))
    return {products, categories: freeMarketResponseProducts.categories, hasNextPage: freeMarketResponseProducts.hasNextPage, totalPages: freeMarketResponseProducts.totalPages}
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