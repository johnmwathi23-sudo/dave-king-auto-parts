import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dave King Auto Parts",
  description: "Auto Spare Parts E-commerce",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-900 text-white p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-bold">Dave King Auto Parts</a>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
