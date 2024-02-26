import { Product } from "@/app/items/interfaces/product";

export const productTest: Product = {
  id: 'money',
  image: 'http://image.com',
  price: 123,
  title: 'Purse with money'
}

export const productsTest: Product[] = [
  {
    id: '1',
    image: 'http:image1.com',
    price: 23,
    title: 'product 1'
  },
  {
    id: '2',
    image: 'http:image2.com',
    price: 10,
    title: 'product 2'
  },
  {
    id: '3',
    image: 'http:image3.com',
    price: 13,
    title: 'product 3'
  },
]