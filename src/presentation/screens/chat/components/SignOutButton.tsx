"use client";
import { auth } from "@/src/infrastructure/FirebaseServices";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignOutButton() {
  const [user] = useAuthState(auth);

  async function signOut() {
    await auth.signOut();
  }

  return (
    user && (
      <button
        className="bg-white p-2 rounded-lg text-black font-mono"
        onClick={signOut}
      >
        Sign Out
      </button>
    )
  );
}
