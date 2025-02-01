import '../styles/globals.css';

import { api, HydrateClient } from "~/trpc/server";
// import InfiniteScroll from './_components/InfiniteScroll';
import Hero from './_components/Hero';
import About from './_components/About';

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#000]">
        <Hero />
        {/* <InfiniteScroll /> */}
        <About/>
      </main>
    </HydrateClient>
  );
}
