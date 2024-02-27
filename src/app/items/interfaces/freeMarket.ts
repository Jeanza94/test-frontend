
export interface FreeMarketResponseProducts {
  categories: string[],
  items: Item[],
  hasNextPage: boolean,
  totalPages: number
}

export interface ItemDescription extends Item {
  sold_quantity: number,
  description: string
}

export interface Item {
  author: Author,
  condition: string,
  free_shipping: boolean,
  id: string,
  picture: string,
  price: Price,
  title: string
}

interface Author {
  name: string,
  lastname: string
}

interface Price {
  amount: number,
  currency: string,
  decimals: number
}
