import '../styles/globals.css';

import { api, HydrateClient } from "~/trpc/server";
import Hero from './_components/Hero';
import About from './_components/About';
import Buildeverything from './_components/Buildeverything'
import ServicesGrid from './_components/Service';
import { OurWork } from './_components/OurWork';
import Testimonials from './_components/Testimonials';
import ReachUs from './_components/ReachUs';
import Footer from './_components/footer';

export default async function Home() {

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#000]">
        <Hero />
        <About />
        <ServicesGrid/>
        <Buildeverything />
        <Testimonials />
        <OurWork />
        <ReachUs />
        <Footer/>

      </main>
    </HydrateClient>
  );
}
