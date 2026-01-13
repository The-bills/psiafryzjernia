"use client";
import { useState } from "react";

const CertificatesModal = ({ pdf, onClose }: { pdf: string; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <button
      className="absolute top-0 right-0 m-4 text-bone1 text-3xl"
      onClick={onClose}
    >
      &times;
    </button>
    <iframe
      src={pdf}
      className="w-11/12 h-[90vh] bg-white rounded-lg shadow-lg"
      title="Podgląd certyfikatu"
    />
  </div>
);

export const Certificates = () => {
  const certificates = [
    { thumb: "11 2025.png", file: "11 2025.pdf", title: "Orły Groomingu 2025" },
    { thumb: "02 2025.png", file: "02 2025.pdf", title: "Wyzwanie łapkowe 2025" },
    { thumb: "10 2025.png", file: "10 2025.pdf", title: "Podstawy dermatologii dla groomerów 2025" },
    { thumb: "06 2024.png", file: "06 2024.pdf", title: "Next Level - Okrągła główka 2025" },
    { thumb: "01 2024.png", file: "01 2024.pdf", title: "Behawior psów dla groomerów 2024" },
    { thumb: "02 2023 II.png", file: "02 2023 II.pdf", title: "Podstawy dermatologii dla groomerów 2023" }, //przytnij zdjęcia
    { thumb: "20 2023 III.png", file: "20 2023 III.pdf", title: "Wyzwanie pyszczkowe 2023" },
    { thumb: "12 2022.png", file: "12 2022.pdf", title: "Groomer roku 2022" },
    { thumb: "05 2021.png", file: "05 2021.pdf", title: "Fluffy and around 2021" },
    { thumb: "03 2021.png", file: "03 2021.pdf", title: "Perfection by Valeria Papian 2021" },
    { thumb: "02 2021.png", file: "02 2021.pdf", title: "Dog House - pielęgnacja pomeranianów 2021" },
    { thumb: "01 2021.png", file: "01 2021.pdf", title: "Certyfikat Kompetenji Zawodowych 2021" },
    // { thumb: "02 2023.png", file: "02 2023.pdf", title: "DO USTALENIA, bo to to samo tylko po angielsku" }, //to w sumie to samo tylko po angielsku
    { thumb: "11 2020.png", file: "11 2020.pdf", title: "Misiaczki spod nasadki 2020" },
    { thumb: "03 2020.png", file: "03 2020.pdf", title: "Strzyżenie komercyjne 2020" },
    { thumb: "dyplom 01 2020 .png", file: "dyplom 01 2020 .pdf", title: "Grooming - sztuka pielęgnacji psów 2020" },
  ];

  const [openCert, setOpenCert] = useState<string | null>(null);

  return (
    <section id="certificates" className="w-full p-6 md:p-16 bg-graphite1 text-bone1">
      <h1 className="text-4xl md:text-6xl text-center pb-10 underline decoration-1 underline-offset-8">
        Certyfikaty
      </h1>

      <div className="columns-2 md:columns-3 gap-5 space-y-5">
        {certificates.map((cert) => (
          <div
            key={cert.file}
            // className="break-inside-avoid rounded-md cursor-pointer transition transform hover:scale-105 hover:brightness-110"
            className="break-inside-avoid rounded-md cursor-pointer transition ease-linear delay-200 duration-300 hover:scale-110" //do ustalenia który flow
            onClick={() => setOpenCert(`/cert/${cert.file}`)}
          >
            <img
              src={`/cert/img/${cert.thumb}`}
              alt={cert.title}
              className="object-cover w-full h-full"
            />
            <p className="text-center mt-2 text-sm">{cert.title}</p>
          </div>
        ))}
      </div>

      {openCert && (
        <CertificatesModal
          pdf={openCert}
          onClose={() => setOpenCert(null)}
        />
      )}
    </section>
  );
};
