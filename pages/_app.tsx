import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default App;
