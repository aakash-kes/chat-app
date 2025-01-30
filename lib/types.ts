export interface Message {
  id: string
  content: string
  type: "user" | "ai"
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
}

