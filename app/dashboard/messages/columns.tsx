import { Message } from "@/data/messages/schema";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "senderId",
    header: "Sender",
  },
  {
    accessorKey: "receiverId",
    header: "Receiver",
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      const message = row.original as Message;
      return (
        <Link href={`/messages/${message.id}`} className="text-blue-600 hover:underline">
          {message.content}
        </Link>
      );
    },
  },
  {
    accessorKey: "sentAt",
    header: "Sent At",
  },
  {
    accessorKey: "read",
    header: "Read",
  },
]; 