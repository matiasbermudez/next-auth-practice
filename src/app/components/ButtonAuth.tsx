"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth () {
  const { data: session, status } = useSession();
    console.log({session , status})
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="btn btn-danger"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      No estas logeado <br />
      <button
        onClick={() => signIn()}
        className="bg-red-700 btn w-20 h-20"
      >
        ENTRA AL COSO
      </button>
    </>
  );
}