import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useNextRouterViewTransitions } from "use-view-transitions/next";
import "@/styles/globals.css";
import { MovieProvider } from "@/context/MovieContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useNextRouterViewTransitions({ events: router.events as any });

  const queryClient = new QueryClient();

  return (
    <MovieProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </MovieProvider>
  );
}
