import Link from "next/link";
import '../styles/globals.css';

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#101010] text-white">
        <h1>Hi From Engineerians</h1>
      </main>
    </HydrateClient>
  );
}
