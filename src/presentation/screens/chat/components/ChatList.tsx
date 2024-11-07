import React, { useRef } from "react";
import useMessages from "../hooks/useMessages";
import MessageBuble from "./MessageBuble";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/infrastructure/FirebaseServices";
import ChatForm from "./ChatForm";

export default function ChatList() {
  const [user] = useAuthState(auth);
  const messages = useMessages();
  const divScroll = React.useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <div className="p-3 flex-1 overflow-y-auto flex flex-col-reverse max-w-screen-md w-full max-h-screen">
        <div id="scroll-to-bottom" ref={divScroll}></div>
        {messages.map((message) => (
          <MessageBuble
            message={message}
            me={user?.uid == message.user.uid}
            key={message.id}
          />
        ))}
      </div>
      <ChatForm
        onSendMessage={() =>
          divScroll.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          })
        }
      />
    </React.Fragment>
  );
}
