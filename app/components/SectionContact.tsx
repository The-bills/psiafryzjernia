import { GoogleMap } from "./GoogleMap";

export const SectionContact = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <section id="contact" className="w-full pt-16 bg-graphite1">
      <h1 className="text-6xl text-center text-bone2 pb-10 underline decoration-1 underline-offset-8">
        Kontakt
      </h1>
      <div className="grid grid-cols-2">
        <div>
          <GoogleMap />
        </div>
        <div className="text-center text-bone1">
          <div>+48 697 260 300</div>
          <div>pytanie@psiafryzjernia.pl</div>
          <div>
            Wizyty prosimy umawiać telefonicznie. Uprzejmie prosimy również o
            telefoniczne odwoływanie wizyt.
          </div>
        </div>
      </div>
    </section>
  );
};
