import React from "react";

import { createMessage } from "@/src/domain/entities/Message";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/infrastructure/FirebaseServices";

import ChatRepository from "@/src/infrastructure/ChatRepository";

interface Props {
  onSendMessage: (message: string) => void;
}

export default function ChatForm({onSendMessage}: Props) {
  const [text, setText] = React.useState("");
  const [user] = useAuthState(auth);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (text.length <= 0) return;
    if (!user) return;

    const message = createMessage({
      text: text,
      createdAt: new Date(),
      user: {
        uid: user?.uid,
        name: user?.displayName ?? "",
        photoURL: user?.photoURL ?? "",
      },
    });

    try {
      setText("");
      await ChatRepository.addMessage(message);
      onSendMessage(message.text);
    } catch (error) {
      console.error(error);
      setText(message.text);
    }
  }

  return (
    <form
      onSubmit={sendMessage}
      className="w-full p-2 flex gap-3 max-w-screen-md"
    >
      <input
        className="flex-1 p-2 rounded-lg bg-transparent border-zinc-800 border text-white font-mono"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="submit"
        value={"📨"}
        className=" cursor-pointer transition-colors hover:bg-white p-2 rounded-lg bg-zinc-800 text-white font-mono"
      />
    </form>
  );
}
