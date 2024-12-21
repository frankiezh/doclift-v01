import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'doclift - Medical Education Platform',
  description: 'Cloud-based continuing education platform for modern hospitals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
