import { useState } from "react";
import { useRouter } from "next/router";
import { useSignInEmailPassword } from "@nhost/nextjs";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { signInEmailPassword, isLoading, isSuccess, isError, error } =
    useSignInEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signInEmailPassword(email, password);
  };

  if (isSuccess) {
    router.push("/");
    return null;
  }

  const disableForm = isLoading;

  return (
    <div>
      <div>
        {/* {needsEmailVerification ? (
          <p className={styles["verification-text"]}>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : ( */}
        <>
          <form>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
            <input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />
            <button
              type="button"
              onClick={(e) => handleOnSubmit(e)}
              disabled={disableForm}
            >
              {isLoading ? <i>Loading...</i> : "Sign in"}
            </button>
            {isError ? <p>{error?.message}</p> : null}
          </form>
        </>
        {/* )} */}
      </div>
      <p>
        No account yet?{" "}
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
