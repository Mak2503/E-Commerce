import { useSignOut } from "@nhost/react";
import withAuth from "components/libs/withAuth";
import { useUserContext } from "UserProvider";

function Home() {
  const { user } = useUserContext();
  const { signOut } = useSignOut();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>Hello {user.displayName}</div>
      <button type="button" onClick={signOut()}>
        Sign out
      </button>
    </div>
  );
}

export default withAuth(Home);
