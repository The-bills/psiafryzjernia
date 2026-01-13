export const SectionPricing = () => {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center w-full pt-16 pb-16 bg-bone2"
    >
      <h1 className="text-4xl md:text-6xl text-graphite1 pb-10 underline decoration-1 underline-offset-8">
        Cennik
      </h1>

      <p className="text-graphite1 text-lg font-light leading-relaxed mb-8 max-w-3xl text-center p-2">
        Psia Fryzjernia z obiektywnych względów obsługuje wyłącznie psy małe o masie do 10 kg. Z tych samych względów nie świadczymy też usługi trymowania (hand stripping).    
        Cena kompleksowej usługi groomerskiej zawsze obejmuje w pierwszym etapie kąpiel, w drugim zaś wyczesanie albo wyczesanie i strzyżenie. Ceny usług ustalane są zawsze indywidualnie, dlatego podane poniżej są jedynie orientacyjne. 
      </p>

      <div className="flex flex-col md:flex-row gap-2 max-w-6xl w-full px-6">        
        <div className="flex flex-col items-center w-full md:w-1/2">
          <h2 className="text-3xl text-graphite1 mb-8 underline decoration-1 underline-offset-8 text-center">
            Kąpiel + wyczesanie
          </h2>

          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <PricingCard title="Psy krótkowłose">
              <div className="mb-4">
                Np. Pinczer, Chihuahua, Jamnik,
                <br />
                Jack Russell Terrier
              </div>
              <div className="text-xl font-semibold">120 zł</div>
            </PricingCard>

            <PricingCard title="Psy długowłose">
              <div className="mb-4">
                Np. Chihuahua długowłosy,
                <br />
                Szpic miniaturowy
              </div>
              <div className="text-xl font-semibold">140 – 200 zł</div>
            </PricingCard>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-1/2">
          <h2 className="text-3xl text-graphite1 mt-8 md:mt-0 mb-8 underline decoration-1 underline-offset-8 text-center">
            Kąpiel + wyczesanie + strzyżenie
          </h2>

          <PricingCard title="Psy długowłose wg ras lub w typie ras" wide>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex justify-between">
                <span>Yorkshire Terrier, Maltańczyk</span>
                <span>150 – 180 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Hawańczyk</span>
                <span>160 – 200 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Coton de Tulear, Bolończyk</span>
                <span>150 – 180 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Shih Tzu, Lhasa Apso</span>
                <span>160 – 200 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Bichon Frise</span>
                <span>170 – 250 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Pudel miniaturowy, Pudel średni</span>
                <span>170 – 250 zł</span>
              </div>
              <div className="flex justify-between">
                <span>West Highland Terrier</span>
                <span>180 – 200 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Sznaucer miniaturowy</span>
                <span>180 – 200 zł</span>
              </div>
              <div className="flex justify-between">
                <span>Hybrydy ras (Maltipoo, Cavapoo)</span>
                <span>170 – 250 zł</span>
              </div>
            </div>
          </PricingCard>
        </div>
      </div>

      <div className="max-w-4xl p-2 bg-bone2 text-sm text-graphite1 mt-8 font-style: italic">
        <p className="mb-2">
          W przypadku psów niewspółpracujących możliwe jest naliczenie dodatkowej
          opłaty w wysokości 50% ceny.
        </p>
        <p>
          Rozczesywanie mocno skołtunionej sierści: 10 zł / 10 minut.
        </p>
      </div>
    </section>
  );
};

type PricingCardProps = {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
};

const PricingCard = ({ title, children, wide }: PricingCardProps) => (
  <div className={`bg-graphite1 pb-10 pl-8 pr-8 border-2 min-h-96 rounded-2xl shadow-lg transition ease-linear delay-300 duration-300 hover:scale-110 ${wide ? "w-full" : "w-60"}`}>

    <div className="text-2xl text-center pt-10 mb-4 leading-relaxed flex justify-center border-b border-bone2 text-bone2">
      {title}
    </div>
    <div className="text-center mt-2 text-bone2">{children}</div>
  </div>
);
