'use client'
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { useBanner } from "../hooks/useBanner"

interface PropsBanner {
  images: string[]
}

const Banner:FC<PropsBanner> = ({images}) => {
  
  const { currentImagePosition } = useBanner(images.length)

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