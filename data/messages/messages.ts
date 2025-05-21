import { Message } from "./schema";

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "1",
    receiverId: "2",
    content: "Hi, I have a question about my lease.",
    sentAt: "2023-06-01T09:00:00Z",
    read: false,
  },
  {
    id: "2",
    senderId: "2",
    receiverId: "1",
    content: "Sure, what would you like to know?",
    sentAt: "2023-06-01T09:05:00Z",
    read: true,
  },
  {
    id: "3",
    senderId: "3",
    receiverId: "1",
    content: "The heating is not working in my apartment.",
    sentAt: "2023-06-02T11:00:00Z",
    read: false,
  },
];

export async function getMessages(): Promise<Message[]> {
  return mockMessages;
} 