export const SectionAbout = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full pt-16 pb-16 px-6"
    >
      <h1 className="text-4xl md:text-6xl pb-10 underline decoration-1 underline-offset-8">
        O NAS!
      </h1>
      <p className={pStyles}>
        <b className="font-bold">Gorąco zapraszamy wszystkie psiaki</b>,
        wymagające kompleksowej opieki w zakresie pielęgnacji, higieny i
        kosmetyki do nowo otwartego salonu pod szyldem „PSIA FRYZJERNIA”. Robimy
        wszystko, aby nasi klienci wychodzili z salonu z zadowoleniem, a ich
        czworonożni przyjaciele piękni, zadbani i zrelaksowani, a już na pewno
        bez traumy.
      </p>
      <p className={pStyles}>
        PSIA FRYZJERNIA zrodziła się z potrzeby serca, pasji, poczucia estetyki
        i piękna, dlatego nasi klienci mogą być pewni, że każdy piesek będzie
        traktowany indywidualnie i wyjątkowo, z cierpliwością i wyrozumiałością,
        bo każdy z nich jest jedyny w swoim rodzaju.
      </p>
      <p className={pStyles}>
        Zapewniamy fachowe przygotowanie dyplomowanego groomera, profesjonalne.
      </p>
      <p className={pStyles}>
        Najnowocześniejsze wyposażenie salonu oraz <b className="font-bold">najwyższą jakość kosmetyków
        do pielęgnacji</b>. Pracujemy wyłącznie na profesjonalnych hiszpańskich
        kosmetykach firmy PSH, dedykowanych dla salonów groomingu. Stworzone
        wyłącznie dla zwierząt, nie zawierają parabenów, silikonu i są w <b className="font-bold">100%
        wegańskie</b>.
      </p>
      <p className={pStyles}>
        Mamy nadzieję, że przystępne ceny usług zachęcą właścicieli czworonogów
        do częstszego spoglądania na potrzeby swoich pupili. <b className="font-bold">Są tego warci</b>
        .
      </p>
    </section>
  );
};

const pStyles =
  "text-gray-700 text-lg font-light leading-relaxed mb-8 max-w-3xl text-center";
