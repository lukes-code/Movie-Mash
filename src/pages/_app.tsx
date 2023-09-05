// _app.tsx
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useNextRouterViewTransitions } from "use-view-transitions/next";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useNextRouterViewTransitions({ events: router.events as any });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
