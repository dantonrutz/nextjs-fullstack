import Image from 'next/image'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import nextImage from '../../public/next.svg'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avaliação 03 - Danton e Rafael',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} h-screen bg-slate-100`}>
        <header className="flex w-full flex-row justify-between border-b-2 border-black/60 bg-slate-100 px-40 py-5">
          <Image src={nextImage} alt="Logo do nextjs" className="w-[10%]" />
          <h3 className="text-black/60">
            Desenvolvido por Danton Rutz e Rafael Miotti
          </h3>
        </header>
        {children}
        <footer className="flex w-full flex-row justify-center border-t-2 border-black/60 bg-slate-100 px-40 py-5">
          <h3 className="text-black/60">
            Avaliação 03 - Desenvolvimento de Aplicações para Internet
          </h3>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
