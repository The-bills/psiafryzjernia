import { useState } from "react";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import Image from "next/image";

const Modal = ({ image, onClose, onPrev, onNext }: { image: string, onClose: () => void, onPrev: () => void, onNext: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        className="absolute top-0 right-0 m-4 text-white text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 m-4 text-white text-3xl"
        onClick={onPrev}
      >
        <ArrowLeft className="h-10 w-10" />
      </button>
      <img src={image} className="max-w-full max-h-screen" />
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 m-4 text-white text-3xl"
        onClick={onNext}
      >
        <ArrowRight className="h-10 w-10" />
      </button>
    </div>
  );
};

export const SectionGallery = () => {
  // const images = [
  //   '20230517_152029 (1).jpg',
  //   '20240131_134541 (1).jpg',
  //   '20240312_135351 (1).jpg',
  //   '20240411_123402 (1).jpg',
  //   '20240608_102306 (1).jpg',
  //   '20230519_121948 (1).jpg',
  //   '20240214_153731 (1).jpg',
  //   '20240315_102123 (1).jpg',
  //   '20240412_124340 (1).jpg',
  //   '20230519_121952 (1).jpg',
  //   '20240219_145128 (1).jpg',
  //   '20240315_102125 (1).jpg',
  //   '20240423_095040 (1).jpg',
  //   '20240630_120509 (1).jpg',
  //   '20231115_123737 (1).jpg',
  //   '20240302_125919 (1).jpg',
  //   '20240321_151852 (1).jpg',
  //   '20240605_101129 (1).jpg',
  //   '20231219_155901 (1).jpg',
  //   '20240328_115313 (1).jpg',
  //   '20240605_175552 (1).jpg',
  //   '20231221_182248 (1).jpg',
  //   '20240302_130033 (1).jpg',
  //   '20240330_104442 (1).jpg',
  //   '20240123_113716 (1).jpg',
  //   '20240307_110515 (1).jpg',
  //   '20240405_110217 (1).jpg',
  //   '20240606_113228 (1).jpg'
  // ];

  const images = [
    '20230517_152029.jpg',
    '20240131_134541.jpg',
    '20240312_135351.jpg',
    '20240411_123402.jpg',
    '20240608_102306.jpg',
    '20230519_121948.jpg',
    '20240214_153731.jpg',
    '20240315_102123.jpg',
    '20240412_124340.jpg',
    '20230519_121952.jpg',
    '20240219_145128.jpg',
    '20240315_102125.jpg',
    '20240423_095040.jpg',
    '20240630_120509.jpg',
    '20231115_123737.jpg',
    '20240302_125919.jpg',
    '20240321_151852.jpg',
    '20240605_101129.jpg',
    '20231219_155901.jpg',
    '20240328_115313.jpg',
    '20240605_175552.jpg',
    '20231221_182248.jpg',
    '20240302_130033.jpg',
    '20240330_104442.jpg',
    '20240123_113716.jpg',
    '20240307_110515.jpg',
    '20240405_110217.jpg',
    '20240606_113228.jpg'
  ];

  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (photoIndex !== null) {
      setPhotoIndex((photoIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section
      id="gallery"
      className="w-full p-6 md:p-16 bg-bone2"
      style={{ overflow: "hidden" }}
    >
      <h1 className="text-4xl md:text-6xl text-center text-graphite1 pb-10 underline decoration-1 underline-offset-8">
        Galeria
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
        {images.map((image, index) => (
          <div key={image} className="aspect-square overflow-hidden rounded-md">
            <img
              src={'/gallery/thumbnail/' + image}
              alt="photo"
              className="aspect-square object-cover brightness-75 transition ease-in delay-500 hover:scale-125 hover:brightness-100 duration-300 cursor-pointer"
              onClick={() => setPhotoIndex(index)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {photoIndex !== null && (
        <Modal
          image={'/gallery/' + images[photoIndex]}
          onClose={() => setPhotoIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};