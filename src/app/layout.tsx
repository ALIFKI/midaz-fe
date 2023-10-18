import './globals.css'
import type { Metadata } from 'next'
import { Inter,Linden_Hill } from 'next/font/google'

const linden = Linden_Hill({
  subsets : ['latin'],weight : '400'
})

export const metadata: Metadata = {
  title: 'MIDAZ Senayan Golf',
  description: 'MIDAZ App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={linden.className}>{children}</body>
    </html>
  )
}
