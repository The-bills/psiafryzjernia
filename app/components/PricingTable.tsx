export const PricingTable = () => {
  const tdClass = "border border-black text-center p-2";

  return (
    <table className="border min-w-96">
      <thead>
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
      </thead>
      <tbody>
        <tr>
          <td className={tdClass}>Kompleks grooming ze strzyżeniem</td>
          <td className={tdClass}>od 140</td>
          <td className={tdClass}>od 150</td>
          <td className={tdClass}>od 160</td>
          <td className={tdClass}>od 180</td>
          <td className={tdClass}>115/1h</td>
        </tr>
        <tr>
          <td className={tdClass}>Kompleks grooming z trymowaniem</td>
          <td className={tdClass}>od 170</td>
          <td className={tdClass}>od 190</td>
          <td className={tdClass}>od 200</td>
          <td className={tdClass}>od 220</td>
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
          <td className={tdClass}>od 90</td>
          <td className={tdClass}>od 130</td>
          <td className={tdClass}>od 150</td>
          <td className={tdClass}>od 180</td>
          <td className={tdClass}>100/1h</td>
        </tr>
        <tr>
          <td className={tdClass}>Skrócenie pazurów</td>
          <td className={tdClass} colSpan={3}>
            20
          </td>
          <td className={tdClass} colSpan={2}>
            30
          </td>
        </tr>
        <tr>
          <td className={tdClass}>Czyszczenie okolicy oczu</td>
          <td className={tdClass} colSpan={2}>
            20
          </td>
          <td className={tdClass} colSpan={3}>
            20
          </td>
        </tr>
        <tr>
          <td className={tdClass}>Czyszczenie uszu</td>
          <td className={tdClass} colSpan={2}>
            20
          </td>
          <td className={tdClass} colSpan={3}>
            30
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
      </tbody>
    </table>
  );
};
