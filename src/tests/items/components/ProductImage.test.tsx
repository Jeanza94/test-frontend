import ProductPicture from '../../../app/items/components/ProductPicture'
import {render, screen} from '@testing-library/react'
import { productTest } from './data-test'

describe('Test in <ProductImage/>', () => { 
  test('should render a image with src next optimization and alt "imagen producto"', () => { 
    render(<ProductPicture productImage={productTest.image}/>)
    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toBe('/_next/image?url=http%3A%2F%2Fimage.com&w=3840&q=75')
    expect(image.getAttribute('alt')).toBe('Imagen producto')
  })
})