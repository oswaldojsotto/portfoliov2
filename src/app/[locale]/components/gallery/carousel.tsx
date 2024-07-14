import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import NavigationButton from "../navigation-button";

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
    <div className="w-full absolute z-10 my-[17rem] flex justify-between px-8">
      <button
        onClick={() =>
          galleryRef.current.slideToIndex(
            galleryRef.current.getCurrentIndex() - 1
          )
        }>
        <NavigationButton direction="left" />
      </button>
      <button
        onClick={() =>
          galleryRef.current.slideToIndex(
            galleryRef.current.getCurrentIndex() + 1
          )
        }>
        <NavigationButton direction="right" />
      </button>
    </div>
  );

  return (
    <div>
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
