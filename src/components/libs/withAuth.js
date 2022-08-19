import { useRouter } from "next/router";
import { useAuthenticationStatus } from "@nhost/nextjs";

export default function withAuth(Component) {
  return function AuthProtected(props) {
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    if (isLoading) {
      return <i>Loading...</i>;
    }

    if (!isAuthenticated) {
      router.push("/signin");
      return null;
    }

    return <Component {...props} />;
  };
}
