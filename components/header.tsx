import Image from "next/image"
import { Menu } from "lucide-react"
import Link from "next/link"


interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 border-b flex items-center px-4 justify-between md:justify-start">
      <button className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex items-center gap-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-30%20at%2011.25.34%20AM%20(1)-qUGwF8WVtaUH4kHRn2K0XCfqmWtVOu.jpeg"
          alt="Logo"
          width={32}
          height={32}
          className="rounded"
        />
        {/* <span className="font-semibold text-lg">LOGO AI</span> */}
        <Link href="/" className="flex items-center gap-2">
            <span className="bg-gray-900 text-white px-3 py-1 rounded-md font-semibold">LOGO AI</span>
          </Link>
      </div>
    </header>
  )
}

