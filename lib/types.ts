export interface HeaderProps {
  onMenuClick: () => void;
}

export interface Message {
  id: string
  content: string
  type: "user" | "ai"
}

export interface ChatAreaProps {
  chatId: string;
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
}

export interface SectionProps {
  title: string;
  bgColor: string;
  textColor: string;
  items: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string }[];
}

export interface MenuItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}