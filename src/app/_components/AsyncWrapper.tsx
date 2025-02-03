import { Suspense } from "react";
import Loader from "../loading";

export default function AsyncWrapper({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
