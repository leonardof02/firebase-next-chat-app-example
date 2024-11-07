import { Message } from "@/src/domain/entities/Message";

interface Props {
  message: Message;
  me?: boolean;
}

export default function MessageBuble({
  message: {
    text,
    createdAt,
    user: { name: username, photoURL },
  },
  me = false,
}: Props) {
  return (
    <div className={`flex w-full py-1 ${me ? "justify-end" : "justify-start"}`}>
      <img src={photoURL} className="w-6 h-6 rounded-full bg-gray-100" />
      <div className="ml-3 text-sm font-medium text-gray-900 bg-white p-3 rounded-lg max-w-sm">
        <h6 className="font-mono font-bold text-blue-400 text-xs">{username}</h6>
        <p className="text-gray-900">{text}</p>
        <p className="text-gray-500 text-xs">{createdAt.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}
