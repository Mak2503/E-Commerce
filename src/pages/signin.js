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
    <div className="flex flex-col justify-center items-center">
      <div>
        {/* {needsEmailVerification ? (
          <p className={styles["verification-text"]}>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : ( */}
        <>
          <form>
            <div className="flex flex-col">
              <input
                className="px-3 py-2 my-2 border border-gray-300 rounded-md"
                type="email"
                label="Email address"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disableForm}
                required
              />
              <input
                className="px-3 py-2 my-2 border border-gray-300 rounded-md"
                type="password"
                label="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disableForm}
                required
              />
            </div>
            <button
              type="button"
              className="px-3 py-2 text-sm bg-blue-500 text-white"
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
          <a className="text-blue-500 underline">Sign up</a>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
