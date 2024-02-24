
export interface Product {
  id: string,
  image: string,
  title: string,
  price: number
}

export interface ProductDetailed extends Product {
  description: string,
  condition: string,
  totalSelled: number,
}