import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../utils/theme";
import {
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH_REDIRECT_URI,
} from "@/utils/constans";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={theme}>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    // </ThemeProvider>
  );
}
