"use client"
import GoogleIcon from "@/assets/icons/google.svg";
import { auth } from "@/src/infrastructure/FirebaseServices";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function SignInWithGoogleButton() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="w-full h-12 flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      type="button"
    >
      <img src={GoogleIcon.src} className="w-6 h-6" aria-hidden="true" />
      <span className="ml-2 font-mono">Sign in with Google</span>
    </button>
  );
}
