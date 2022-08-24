import { useState } from "react";
import { useRouter } from "next/router";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import Link from "next/link";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { signUpEmailPassword, isLoading, isSuccess, isError, error } =
    useSignUpEmailPassword();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    });
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
          <p>
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : ( */}
        <form onSubmit={handleOnSubmit}>
          <div className="flex flex-col">
            <input
              className="px-3 py-2 my-2 border border-gray-300 rounded-md"
              label="First name"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              disabled={disableForm}
              required
            />
            <input
              className="px-3 py-2 my-2 border border-gray-300 rounded-md"
              label="Last name"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              disabled={disableForm}
              required
            />
            <input
              className="px-3 py-2 my-2 border border-gray-300 rounded-md"
              type="email"
              label="Email address"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
            <input
              className="px-3 py-2 my-2 border border-gray-300 rounded-md"
              type="password"
              label="Create password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 text-sm bg-blue-500 text-white"
            disabled={disableForm}
          >
            {isLoading ? <i>Loading...</i> : "Create account"}
          </button>

          {isError ? <p>{error?.message}</p> : null}
        </form>
        {/* )} */}
      </div>
      <p>
        Already have an account?{" "}
        <Link href="/signin">
          <a className="text-blue-500 underline">Sign in</a>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
