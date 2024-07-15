export const SectionOffer = () => {
  return (
    <section id='offer' className="flex flex-col items-center justify-center w-full pt-16 pb-16 bg-graphite1">
      <h1 className="text-4xl md:text-6xl text-bone2 pb-10 underline decoration-1 underline-offset-8">Oferta</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-6xl pl-10 pr-10">
        <Card title="Kąpiel">
          W zakres usługi wchodzi wyczesanie pieska przed kąpielą, dwukrotna
          kąpiel z użyciem odpowiednich do rodzaju szaty i jakości/kondycji
          włosa kosmetyków, wyczesanie i modelowanie pieska pod suszarką i
          kosmetyka estetyczna.
        </Card>
        <Card title="Usługa kompleksowa">
          W zakres usługi wchodzi standardowo: wyczesanie pieska przed kąpielą,
          dwukrotna kąpiel z użyciem odpowiednich do typu i kondycji włosa oraz
          wybranej fryzury kosmetyków, wyczesanie z modelowaniem pod suszarką,
          strzyżenie według ustaleń z klientem lub według wzorca rasy,
          pielęgnacja okolic oczu, uszu, skrócenie pazurków, strzyżenie
          higieniczne oraz kończąca kosmetyka estetyczna.
        </Card>
        <Card title="Trymowanie">
          Zlecenie usługi przyjmowane jest po wcześniejszej konsultacji i ocenie
          sierści psa. Pieska nie należy kąpać co najmniej 2 tygodnie przed
          wizytą.
        </Card>
        <Card title="Inne usługi">
          Są to zlecane osobno: obcinanie pazurków, czyszczenie uszu, oczu,
          strzyżenie higieniczne, usuwanie kleszcza
        </Card>
        <Card title="Rozczesywanie skołtunionej sierści">
          Usługa zlecana osobno.
        </Card>
      </div>
    </section>
  );
};

type CardProps = {
  title: string;
  children: React.ReactNode;
};
export const Card = (p: CardProps) => (
  <div className="bg-bone2 w-80 pb-10 pl-8 pr-8 min-h-96 border-2">
    <div className="text-2xl text-center pt-10 mb-2 leading-relaxed flex justify-center border-b border-black">
      {p.title}
    </div>
    <div className="text-center mt-2">{p.children}</div>
  </div>
);

export const Underline = () => <div className="w-1/2 h-1 bg-gray-950"></div>;
