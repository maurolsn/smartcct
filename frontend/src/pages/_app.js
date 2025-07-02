import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../context/AuthContext";
import { useRouter } from "next/router";

const noAuthRoutes = ["/login"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAuthRoute = noAuthRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {isAuthRoute ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </AuthProvider>
  );
}
