import { Plus, MessageSquare, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onSelectChat: (chatId: string) => void
  selectedChat: string | null
}

export default function Sidebar({ isOpen, onClose, onSelectChat, selectedChat }: SidebarProps) {
  const recentChats = [
    { id: "1", title: "Mini Volcano Project" },
    { id: "2", title: "Make Scented Candles" },
    { id: "3", title: "Home Workout Routine" },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`
          mobile-menu md:relative md:right-0 md:w-80 bg-white border-r p-4
          flex flex-col gap-4 ${isOpen ? "open" : ""}
        `}
      >
        <div className="md:hidden flex justify-end">
          <Button variant="ghost" size="icon" onClick={onClose}>
            ✕
          </Button>
        </div>

        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Chat
        </Button>

        <div className="flex flex-col gap-1">
          <div className="text-sm font-semibold px-2 py-1">Recent Chats</div>
          {recentChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                onSelectChat(chat.id)
                onClose()
              }}
              className={`menu-item ${selectedChat === chat.id ? "active" : ""}`}
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">{chat.title}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <Button variant="outline" className="w-full flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Sign up / Log in
          </Button>
        </div>
      </aside>
    </>
  )
}

