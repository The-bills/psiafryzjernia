export const SectionPricing = () => {
  const tdClass = "border border-black text-center p-2";

  return (
    <section
      id="offer"
      className="flex flex-col items-center justify-center w-full pt-16 pb-16"
    >
      <h1 className="text-6xl pb-10 underline decoration-1 underline-offset-8">
        Cennik
      </h1>
      <p className="text-graphite text-lg font-light leading-relaxed mb-8 max-w-3xl text-center">
        Cennik jest orientacyjny, a ostateczna cena usługi zależy od wielu
        czynników, takich jak rodzaj i kondycja szaty, wielkość i waga psa, jego
        zachowanie oraz częstotliwość korzystania z usług. Rzeczywista cena
        zostanie ustalona po wykonaniu usługi, zwłaszcza podczas pierwszej
        wizyty. Poniższe ceny są wyrażone w PLN.
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-6xl pl-10 pr-10">
        <table className="border">
          <tr>
            <td className={tdClass} rowSpan={2}>
              Usługa
            </td>
            <td className={tdClass} colSpan={6}>
              Grupa psów
            </td>
          </tr>
          <tr>
            <td className={tdClass}>
              Grupa mini <div className="font-bold">do 5kg</div>
            </td>
            <td className={tdClass}>
                Grupa maluchów <div className="font-bold">od 5kg do 10kg</div>
                </td>
            <td className={tdClass}>
                Grupa średniaków <div className="font-bold">od 10kg do 18kg</div>
                </td>
            <td className={tdClass}>
                Grupa większych <div className="font-bold">od 18kg do 25kg</div>
                </td>
            <td className={tdClass}>Grupa <b className="font-bold">25kg+</b></td>
          </tr>
          <tr>
            <td className={tdClass}>Kompleks grooming ze strzyżeniem</td>
            <td className={tdClass}>110</td>
            <td className={tdClass}>120</td>
            <td className={tdClass}>140</td>
            <td className={tdClass}>160</td>
            <td className={tdClass}>115/1h</td>
          </tr>
          <tr>
            <td className={tdClass}>Kompleks grooming z trymowaniem</td>
            <td className={tdClass}>130</td>
            <td className={tdClass}>160</td>
            <td className={tdClass}>170</td>
            <td className={tdClass}>180</td>
            <td className={tdClass}>indywidualnie</td>
          </tr>
          <tr>
            <td className={tdClass}>Rozczesywanie skołtunionej sierści</td>
            <td className={tdClass} colSpan={2}>
              10/10min
            </td>
            <td className={tdClass} colSpan={3}>
              15/10min
            </td>
          </tr>
          <tr>
            <td className={tdClass}>Kąpiel z wyczesaniem</td>
            <td className={tdClass}>70</td>
            <td className={tdClass}>80</td>
            <td className={tdClass}>120</td>
            <td className={tdClass}>140</td>
            <td className={tdClass}>100/1h</td>
          </tr>
          <tr>
            <td className={tdClass}>Skrócenie pazurów</td>
            <td className={tdClass} colSpan={2}>
              10
            </td>
            <td className={tdClass} colSpan={3}>
              20
            </td>
          </tr>
          <tr>
            <td className={tdClass}>Czyszczenie okolicy oczu</td>
            <td className={tdClass} colSpan={2}>
              20
            </td>
            <td className={tdClass} colSpan={3}>
              30
            </td>
          </tr>
          <tr>
            <td className={tdClass}>Czyszczenie uszu</td>
            <td className={tdClass} colSpan={2}>
              10
            </td>
            <td className={tdClass} colSpan={3}>
              20
            </td>
          </tr>
          <tr>
            <td className={tdClass}>Strzyżenie higieniczne</td>
            <td className={tdClass} colSpan={2}>
              20
            </td>
            <td className={tdClass} colSpan={2}>
              30
            </td>
            <td className={tdClass}>indywidualnie</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
