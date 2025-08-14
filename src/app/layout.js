import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zentha - Revolutionary Gaming Ecosystem',
  description: 'Redefining Gaming Through Ownership, Freedom & Fun. A next-generation gaming platform where immersive gameplay meets real-world value.',
  keywords: 'gaming, crypto, blockchain, gaming ecosystem, player ownership, gaming platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
