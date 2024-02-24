'use client'

import { useEffect, useState } from "react";

export const useBanner = (imagesLength: number) => {

  const [currentImagePosition, setCurrentImagePosition] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage()
    }, 5000);
    return () => {
      clearTimeout(timer)
    }
  }, [currentImagePosition])

  const nextImage = () => {
    setCurrentImagePosition(prev => prev === imagesLength -1 ? 0 : prev + 1)
  }

  return {
    currentImagePosition
  }
}