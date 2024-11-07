"use client"
import { SignInWithGoogleButton } from "./components/SignInWithGoogleButton";
import { auth } from "@/src/infrastructure/FirebaseServices";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignInScreen() {

  const [user] = useAuthState(auth);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 border border-zinc-800 p-5 rounded-lg">
        <h2 className="mt-6 text-2xl font-extrabold font-mono">
          Sign in to your account
        </h2>
        <div className="mt-8 space-y-6">
          <SignInWithGoogleButton />
        </div>
        {user && <p>Welcome {user.email}</p>}
      </div>
    </div>
  );
}
