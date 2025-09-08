import './globals.css'

export const metadata = {
  title: 'Zentha - Revolutionary Gaming Ecosystem',
  description: 'Redefining Gaming Through Ownership, Freedom & Fun. A next-generation gaming platform where immersive gameplay meets real-world value.',
  keywords: 'gaming, crypto, blockchain, gaming ecosystem, player ownership, gaming platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-parkins">
        {children}
      </body>
    </html>
  )
}
