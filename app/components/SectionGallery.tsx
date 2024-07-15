import { useState } from "react";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

export const SectionGallery = () => {
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
]

  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <section
      id="gallery"
      className="w-full p-6 md:p-16 bg-bone2"
      style={{ overflow: "hidden" }}
    >
      <h1 className="text-4xl md:text-6xl text-center text-graphite1 pb-10 underline decoration-1 underline-offset-8">
        Galeria
      </h1>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-4 ">
        {images.map(image =>(
          <div className="aspect-square overflow-hidden rounded-md">
          <img src={'/gallery/' + image} className="aspect-square object-cover transition ease-in delay-500 hover:scale-125 hover:brightness-110 duration-300"/>
          </div>
        ))}
      </div>
    </section>
  );
};
