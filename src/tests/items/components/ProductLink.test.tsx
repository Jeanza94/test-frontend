import ProductLink from "../../../app/items/components/ProductLink"
import { render, screen } from "@testing-library/react"

describe('Test ub <ProductLink />', () => { 
  test('should render an anchor with the href /items/id', () => { 
    render(<ProductLink productId='id'/>)
    const link = screen.getByRole('link')
    expect(link.innerHTML).toBe('Ver detalle')
    expect(link.getAttribute('href')).toBe('/items/id')
  })
})