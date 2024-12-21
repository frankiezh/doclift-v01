import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/doclift-logo.svg"
            alt="doclift"
            width={120}
            height={40}
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
            Lösungen
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Funktionen
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Preise
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            Über uns
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600" asChild>
            <Link href="/register">Kostenlos testen</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

