import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aventura Andina - Descubre la Magia de los Andes",
  description:
    "Vive experiencias auténticas en paisajes únicos. Conecta con culturas milenarias y crea recuerdos inolvidables en cada aventura andina.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
