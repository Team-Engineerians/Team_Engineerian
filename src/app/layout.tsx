import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./Navbar";
import LoaderWrapper from "./_components/LoaderWrapper";
import PageWrapper from "./_components/PageWrapper";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoaderWrapper>
          <TRPCReactProvider>
            <Navbar />
            <PageWrapper>{children}</PageWrapper> {/* Smooth transitions */}
          </TRPCReactProvider>
        </LoaderWrapper>
      </body>
    </html>
  );
}
