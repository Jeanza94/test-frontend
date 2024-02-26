import { render, screen } from "@testing-library/react"
import ProductCardContainerHome from "../../../app/items/components/ProductCardContainerHome"
import { fetchProducts } from "../../../app/items/actions"
import { productsTest } from "./data-test"

jest.mock('../../../app/items/actions')

describe('Test in <ProductCardContainerHome/>', () => { 
  test('should render', async() => { 
    (fetchProducts as jest.Mock).mockReturnValue({
      products: productsTest
    })
    const jsx = await ProductCardContainerHome()
    render(jsx)
    expect((fetchProducts as jest.Mock)).toHaveBeenCalledTimes(1)
  })
})