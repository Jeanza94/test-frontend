import { ItemDescription, Item } from '../interfaces/freeMarket';
import { Product, ProductDetailed } from "../interfaces/product";

export const mapFreeMarketItemToProduct = (item: Item | ItemDescription): Product => {
  return {
    id: item.id,
    image: item.picture,
    price: item.price.amount,
    title: item.title 
  }
}

export const mapFreeMarketItemDescriptionToProduct = (item: ItemDescription): ProductDetailed => {
  const commonAttributes = mapFreeMarketItemDescriptionToProduct(item)
  return {
    ...commonAttributes,
    condition: item.condition,
    description: item.description,
    totalSelled: item.sold_quantity,
  }
}