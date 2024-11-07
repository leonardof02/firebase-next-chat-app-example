"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/infrastructure/FirebaseServices";
import ChatList from "./components/ChatList";
import SignInScreen from "../signin/SignInScreen";

export default function ChatPage() {
  const [user] = useAuthState(auth);

  return (
    <div className="full w-full h-full flex flex-col justify-center items-center gap-5">
      {user ? <ChatList /> : <SignInScreen />}
    </div>
  );
}
