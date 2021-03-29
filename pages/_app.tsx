import "../styles/global.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { ThemeProvider } from "next-themes";
import { pageview } from "../lib/gtag";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider defaultTheme="light">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default App;
