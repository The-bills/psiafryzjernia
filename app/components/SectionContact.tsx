import { GoogleMap } from "./GoogleMap";

export const SectionContact = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <section id="contact" className="w-full p-6 md:p-16 bg-graphite1">
      <h1 className="text-4xl md:text-6xl text-center text-bone2 pb-10 underline decoration-1 underline-offset-8">
        Kontakt
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h1 className="hidden md:block text-3xl md:text-4xl text-center text-bone2 pb-10 underline decoration-1 underline-offset-8">
            Dojazd
          </h1>
          <div>
            <GoogleMap />
          </div>
        </div>
        <div className="text-center text-bone1 text-2xl my-12">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl">
              +48 697 260 300
            </h1>
            </div>
          <div>
            <h1 className="font-bold text-2xl md:text-3xl">
              pytanie@psiafryzjernia.pl
            </h1>
          </div>
          <div className="mt-8">
            Wizyty prosimy umawiać telefonicznie. Uprzejmie prosimy również o telefoniczne odwoływanie wizyt.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center text-bone2 pb-10 underline decoration-1 underline-offset-8">
            Facebook
          </h1>
          <div className="rounded-full w-1/2 h-fit overflow-hidden">
            <a href="https://www.facebook.com/psiafryzjernia">
              <img src="logo-fb.jpeg" className=" transition ease-linear duration-300 hover:scale-110"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
