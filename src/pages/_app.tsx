import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppShell>
        <Component {...pageProps} />;
      </AppShell>
    </SessionProvider>
  );
}
