import Banner from "./shared/components/Banner";

const images = [
  'main-banner/banner-1.webp',
  'main-banner/banner-2.webp',
  'main-banner/banner-3.webp',
]

export default function Home() {
  return (
    <>
      <Banner 
        images={images}
      />
    </>
  );
}
