import { useSignOut } from "@nhost/react";
import Landing from "components/Landing";
import Navbar from "components/Navbar";
import withAuth from "components/libs/withAuth";
import { useUserContext } from "UserProvider";

function Home() {
  const { user } = useUserContext();
  const { signOut } = useSignOut();
  return (
    <div>
      {/* <div className="flex justify-between items-center">
        <div>Hello {user.displayName}</div>
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </div> */}
      <Navbar />
      <Landing />
    </div>
  );
}

export default withAuth(Home);
