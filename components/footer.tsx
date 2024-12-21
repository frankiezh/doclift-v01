import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/doclift-logo-white.svg"
              alt="doclift"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-teal-200">
              Empowering Digital Engagement in Life Sciences
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Our Address</h3>
            <address className="text-teal-200 not-italic">
              doclift<br />
              St. Alban-Anlage 44<br />
              4052 Basel<br />
              Switzerland
            </address>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-teal-200">
              <li><Link href="/features">Funktionen</Link></li>
              <li><Link href="/solutions">Lösungen</Link></li>
              <li><Link href="/pricing">Preise</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Ihre Email-Adresse"
                className="w-full px-4 py-2 rounded bg-teal-800 text-white placeholder:text-teal-400"
              />
              <button className="bg-white text-teal-900 px-6 py-2 rounded hover:bg-teal-100">
                Abonnieren
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-teal-800 text-teal-400 text-sm">
          <div className="flex justify-between">
            <p>© 2024 doclift</p>
            <div className="space-x-4">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

