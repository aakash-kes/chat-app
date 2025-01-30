"use client";

import { useState } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ChatArea from "@/components/chat-area";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string>("1");

  return (
    <main>
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
      <div className="flex h-screen bg-white">
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onSelectChat={(chatId) => setSelectedChat(chatId)}
          selectedChat={selectedChat}
        />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-hidden">
            <ChatArea chatId={selectedChat} />
          </div>
        </div>
      </div>
    </main>
  );
}
