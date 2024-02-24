'use client'
import Image from "next/image"
import { FC, useEffect, useState } from "react"

interface PropsBanner {
  images: string[]
}

const Banner:FC<PropsBanner> = ({images}) => {
  
  const [currentImagePosition, setCurrentImagePosition] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      nextImage()
    }, 5000);
  }, [currentImagePosition])

  const nextImage = () => {
    setCurrentImagePosition(prev => prev === images.length -1 ? 0 : prev + 1)
  }

  return (
    <figure>
      <Image
        src={`/images/${images[currentImagePosition]}`}
        alt="image banner"
        width={1920}
        height={500}
        className="w-full h-40 tablet:w-full tablet:h-auto object-cover"
      />
    </figure>
  )
}

export default Banner