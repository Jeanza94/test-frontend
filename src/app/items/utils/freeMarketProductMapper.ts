import { ItemDescription, Item } from '../interfaces/freeMarket';
import { Product } from "../interfaces/product";

export const mapFreeMarketItemToProduct = (item: Item | ItemDescription): Product => {
  return {
    condition: item.condition,
    image: item.picture,
    price: item.price.amount,
    title: item.title 
  }
}

export const mapFreeMarketItemDescriptionToProduct = (item: ItemDescription): Product => {
  const commonAttributes = mapFreeMarketItemDescriptionToProduct(item)
  return {
    ...commonAttributes,
    description: item.description
  }
}