"use client";

import { SectionIntro } from "./components/SectionIntro";
import { SectionAbout } from "./components/SectionAbout";
import { SectionOffer } from "./components/SectionOffer";
import Head from "next/head";
import { SectionPricing } from "./components/SectionPricing";
import { SectionBeforeVisit } from "./components/SectionBeforeVisit";
import { SectionGallery } from "./components/SectionGallery";
import { SectionContact } from "./components/SectionContact";
import { SectionBottom } from "./components/SectionBottom";

import dynamic from "next/dynamic";

const Paralax = dynamic(
  () => {
    return import("./components/Paralax")
  },
  { ssr: false }
);

const Navbar = dynamic(
  () => {
    return import("./components/Navbar")
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-stretch font-caudex">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <SectionIntro />
      <SectionAbout />
      <Paralax />
      <SectionOffer />
      <SectionPricing />
      <SectionBeforeVisit />
      <SectionGallery />
      <SectionContact />
      <SectionBottom />
    </main>
  );
}
