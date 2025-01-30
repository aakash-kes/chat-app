import type { Message } from "./types"

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Mock chat messages
export async function getChatMessages(chatId: string): Promise<Message[]> {
  await delay(1000)
  return [
    {
      id: "1",
      content: "Hello! How can I assist you today?",
      type: "ai",
    },
    {
      id: "2",
      content: "I need help with a project",
      type: "user",
    },
    {
      id: "3",
      content: "I'd be happy to help you with your project. What kind of project are you working on?",
      type: "ai",
    },
  ]
}

// Mock send message function
export async function sendMessage(chatId: string, content: string): Promise<Message> {
  await delay(1000)
  return {
    id: Date.now().toString(),
    content: `I received your message: "${content}". How can I help you further?`,
    type: "ai",
  }
}

