import { useState } from "react";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

export const SectionGallery = () => {
  const images = ["/photo1.jpeg", "/photo2.jpeg"];
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <section
      id="gallery"
      className="w-full pt-16 bg-bone2"
      style={{ overflow: "hidden" }}
    >
      <h1 className="text-6xl text-center text-graphite1 pb-10 underline decoration-1 underline-offset-8">
        Galeria
      </h1>
      <div className="flex justify-center items-center">
        <ArrowLeft
          onClick={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          className='cursor-pointer w-16 h-16'
        >
          Prev
        </ArrowLeft>
        <img src={images[photoIndex]} className="w-2/4 pointer-events-none" />
        <ArrowRight
          onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
          className='cursor-pointer w-16 h-16'
        >
          Next
        </ArrowRight>
      </div>
    </section>
  );
};
