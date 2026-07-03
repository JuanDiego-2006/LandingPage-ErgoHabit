import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ErgoHabit — Hábitos saludables para estudiantes',
  description: 'ErgoHabit te ayuda a mantener hábitos saludables de hidratación, sueño, ejercicio y nutrición mientras estudias.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}