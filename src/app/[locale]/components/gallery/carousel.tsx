import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import NavigationButton from "@/[locale]/components/navigation-button";

type GalleryProps = {
  images: {
    count: number;
    imagesArray: string[];
  } | null;
};
const Carousel = ({ images }: GalleryProps) => {
  const galleryRef = useRef<undefined | any>(null);
  const photos = images
    ? images.imagesArray.map(image => {
        return { original: image };
      })
    : [];

  const CustomControls = () => (
    <div className="w-full absolute my-[25%] z-[10] flex justify-between px-2">
      <div
        onClick={() =>
          galleryRef.current.slideToIndex(
            galleryRef.current.getCurrentIndex() - 1
          )
        }>
        <NavigationButton direction="left" />
      </div>
      <div
        onClick={() =>
          galleryRef.current.slideToIndex(
            galleryRef.current.getCurrentIndex() + 1
          )
        }>
        <NavigationButton direction="right" />
      </div>
    </div>
  );

  return (
    <div className="mx-8 absolute gallery">
      <ImageGallery
        ref={galleryRef}
        items={photos}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        renderCustomControls={CustomControls}
      />
    </div>
  );
};

export default Carousel;
