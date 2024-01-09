import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

// const inter = Inter({ subsets: ["latin"] })

export const fetchCache = "force-no-store"

export const metadata: Metadata = {
  title: "Surf's Gym App",
  description:
    "An app solely built for Surf's App Users to register their trainings.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center p-20 max-w-6xl mx-auto">
        <Header />
        {children}
      </body>
    </html>
  )
}
