'use client';
import { useEffect, useState } from "react";
import { DataTable } from "@/app/components/ui/data-table/DataTable";
import { getMessages } from "@/data/messages/messages";
import { columns } from "./columns";
import type { Message } from "@/data/messages/schema";

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  
  useEffect(() => {
    getMessages().then(setMessages);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <DataTable columns={columns} data={messages} />
    </div>
  )
}
