import { Menu } from "lucide-react";

import { HeaderProps } from "@/lib/types";

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 border-b flex items-center px-4 justify-between md:justify-start">
      <button className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">LOGO AI</span>
      </div>
    </header>
  );
}
