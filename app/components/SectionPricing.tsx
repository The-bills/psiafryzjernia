import { PricingTable } from "./PricingTable";
import dynamic from 'next/dynamic';

const DynamicPricingTable = dynamic<{}>(() => import('./PricingTable').then(mod => mod.PricingTable), { ssr: false });


export const SectionPricing = () => {
  const tdClass = "border border-black text-center p-2";
  
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center w-full pt-16 pb-16"
    >
      <h1 className="text-4xl md:text-6xl pb-10 underline decoration-1 underline-offset-8">
        Cennik
      </h1>
      <p className="text-graphite text-lg font-light leading-relaxed mb-8 max-w-3xl text-center p-6">
        Cennik jest orientacyjny, a ostateczna cena usługi zależy od wielu
        czynników, takich jak rodzaj i kondycja szaty, wielkość i waga psa, jego
        zachowanie oraz częstotliwość korzystania z usług. Rzeczywista cena
        zostanie ustalona po wykonaniu usługi, zwłaszcza podczas pierwszej
        wizyty. Poniższe ceny są wyrażone w PLN.
      </p>

      <div className="px-4" style={{maxWidth: '100vw'}}>
      <div className="overflow-x-scroll md:overflow-x-auto mx-0 w-full">
      <div className="" style={{minWidth: 450, maxWidth: 1000}}>
        <DynamicPricingTable />
      </div>
      </div>
      </div>
    </section>
  );
};
