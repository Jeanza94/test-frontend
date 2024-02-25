import { Suspense } from "react";
import Banner from "./shared/components/Banner";
import ProductCardContainerHome from "./items/components/ProductCardContainerHome";

export const dynamic = 'force-static'
const images = [
  'main-banner/banner-1.webp',
  'main-banner/banner-2.webp',
  'main-banner/banner-3.webp',
]

const HomePage = () => {
  
  return (
    <>
      <Banner 
        images={images}
      />
      {/* <Suspense fallback={<span>loading</span>}> */}
        <ProductCardContainerHome />
      {/* </Suspense> */}
    </>
  );
}

export default HomePage