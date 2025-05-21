import { getMessages } from "@/data/messages/messages";
import { notFound } from "next/navigation";

interface MessageDetailPageProps {
  params: { id: string };
}

export default async function MessageDetailPage({ params }: MessageDetailPageProps) {
  const messages = await getMessages();
  const message = messages.find((m) => m.id === params.id);
  if (!message) return notFound();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Message</h1>
      <div className="space-y-2">
        <div><strong>Sender ID:</strong> {message.senderId}</div>
        <div><strong>Receiver ID:</strong> {message.receiverId}</div>
        <div><strong>Content:</strong> {message.content}</div>
        <div><strong>Sent At:</strong> {message.sentAt}</div>
        <div><strong>Read:</strong> {message.read ? "Yes" : "No"}</div>
      </div>
    </div>
  );
} 