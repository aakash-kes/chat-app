"use client";

import { useState, useRef, useEffect } from "react";
import { Paperclip, Send } from "lucide-react";

// UI components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getChatMessages, sendMessage } from "@/lib/api";

// types
import type { ChatAreaProps, Message } from "@/lib/types";

// components
import WelcomeScreen from "@/components/welcome-screen";

export default function ChatArea({ chatId }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMessages();
  }, [chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = async () => {
    const chatMessages = await getChatMessages(chatId);
    setMessages(chatMessages);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const response = await sendMessage(chatId, input);
      setMessages((prev) => [...prev, response]);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages?.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${message.type === "user" ? "user" : "ai"}`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {messages.length === 0 && chatId === "1" && <WelcomeScreen />}

      <form
        onSubmit={handleSubmit}
        className="border-t p-4 flex items-center gap-2"
      >
        <Button type="button" variant="ghost" size="icon" className="shrink-0">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything"
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
