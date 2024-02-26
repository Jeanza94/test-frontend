import {render, screen} from '@testing-library/react'
import ProductCard from '../../../app/items/components/ProductCard'
import { productTest } from './data-test'


describe('Test in <ProductCard/>', () => { 
  test('should render with two paragraphs mobile and tablet-desktop', () => { 
    render(<ProductCard product={productTest} />)
    const paragraphs = screen.getAllByText(productTest.title)
    expect(paragraphs.length).toBe(2)
  })
})