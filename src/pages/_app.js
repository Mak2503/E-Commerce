import { NhostClient, NhostNextProvider } from "@nhost/nextjs";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { UserProvider } from "UserProvider";
import "../index.css";

export const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
  region: process.env.NEXT_PUBLIC_NHOST_REGION,
  adminSecret: process.env.NEXT_PUBLIC_NHOST_ADMIN_SECRET,
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
