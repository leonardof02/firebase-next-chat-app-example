import SignOutButton from "./SignOutButton";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">Chat Room</h1>
        <SignOutButton />
      </header>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
