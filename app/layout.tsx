import ChatLayout from "@/src/presentation/screens/chat/components/ChatScreenLayout";
import "@/app/globals.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Chat App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-zinc-900 text-white">
        <ChatLayout>{children}</ChatLayout>
      </body>
    </html>
  );
}
