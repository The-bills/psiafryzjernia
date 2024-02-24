export const SectionBeforeVisit = () => {
  return (
    <section
      id="beforeVisit"
      className="flex flex-col items-center justify-center w-full pt-16 pb-16 bg-graphite1"
    >
      <h1 className="text-6xl text-bone2 pb-10 underline decoration-1 underline-offset-8">
        PRZED WIZYTĄ
      </h1>
      <ol className="list-decimal">
        <li className={liStyles}>
          Przed wizytą nie należy przekarmiać pieska i umożliwić mu załatwienie
          potrzeb fizjologicznych.
        </li>
        <li className={liStyles}>
          W przypadku usługi trymowania nie należy kąpać pieska co najmniej na
          dwa tygodnie przed wizytą.
        </li>
        <li className={liStyles}>
          Przyprowadzając pieska do salonu właściciel oświadcza na piśmie, że
          pies posiada aktualne szczepienie przeciw wściekliźnie.
        </li>
        <li className={liStyles}>
          Salon nie oferuje strzyżenia psiaków bez kąpieli na miejscu ze względu
          na jakość finalnej usługi oraz ze względów sanitarno-epidemicznych.
          Wyjątkiem są psy ras trymowanych.
        </li>
        <li className={liStyles}>
          Wyjątkiem mogą być też pieski schorowane, stare albo z problemami
          behawioralnymi . Nie ponosimy odpowiedzialności za pogorszenie stanu
          zdrowia psiaka w trakcie albo po odbytej wizycie.
        </li>
        <li className={liStyles}>
          Psy z widocznymi oznakami chorób skóry są odsyłane do przychodni
          weterynaryjnej w celu ich wyleczenia. Pielęgnacja zalecana jest
          dopiero po wyleczeniu.W przypadku zlokalizowania kleszcza jest on
          usuwany obligatoryjnie.
        </li>
        <li className={liStyles}>
          Z przyczyn sanitarno-epidemicznych odmawiamy przyjęcia psiaków
          zapchlonych. Aby tego uniknąć, należy regularnie sprawdzać skórę psa.
          Przed wizytą właściciel jest informowany, że stwierdzenie faktu
          zapchlenia w trakcie pielęgnacji łączy się z obowiązkowym odpchleniem
          psa, dezynsekcją salonu i dodatkową opłatą w wysokości 80,00 zł.
        </li>
        <li className={liStyles}>
          Przed pierwszą wizytą właściciel informuje o możliwych zachowaniach
          agresywnych psa. W przypadku, gdy pies jest na tyle agresywny, że nie
          pozwala się opanować groomerowi, może on zrezygnować z wykonywania
          usługi w jej trakcie. Pobierana jest wówczas opłata adekwatna do
          wykonanej usługi.
        </li>
        <li className={liStyles}>
          W celu ułatwienia pracy groomera i skrócenia czasu trwania wizyty
          właściciel zostawia bez obaw swojego pupila sam na sam z groomerem w
          trakcie pielęgnacji. Wszystkie zabiegi przebiegają wtedy sprawniej i
          szybciej. Piesek nie jest rozkojarzony i można z nim współpracować.
          Oznacza to mniej stresu dla obu stron. Wyjątkiem od tej zasady są
          wizyty psiaków starych lub schorowanych, o czym wyżej.
        </li>
      </ol>
    </section>
  );
};

const liStyles =
  "text-bone2 text-lg font-light leading-relaxed mb-8 max-w-3xl";
