import '../styles/globals.css';

import { api, HydrateClient } from "~/trpc/server";
// import InfiniteScroll from './_components/InfiniteScroll';
import Hero from './_components/Hero';
import About from './_components/About';
import Buildeverything from './_components/Buildeverything'
import ServicesGrid from './_components/Service';
import { OurWork } from './_components/OurWork';
import Testimonials from './_components/Testimonials';
export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#000]">
        <Hero />
        {/* <InfiniteScroll /> */}
        <About />
        <ServicesGrid/>
        <Buildeverything />
        <Testimonials />
        <OurWork />

      </main>
    </HydrateClient>
  );
}
