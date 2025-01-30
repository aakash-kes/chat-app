"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import ChatArea from "@/components/chat-area"
import WelcomeScreen from "@/components/welcome-screen"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  return (
    <main className="flex h-screen bg-white">
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectChat={(chatId) => setSelectedChat(chatId)}
        selectedChat={selectedChat}
      />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <div className="flex-1 overflow-hidden">
          {selectedChat ? <ChatArea chatId={selectedChat} /> : <WelcomeScreen />}
        </div>
      </div>
    </main>
  )
}

