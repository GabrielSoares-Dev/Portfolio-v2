'use client'
import React from 'react'
import '@/app/global.css'
import NavBar from '@/components/Layout/NavBar'
import { LayoutProvider } from '@/providers'
import Footer from '@/components/Layout/Footer'
import { useScrollStore } from '@/store/modules'
import { Cursor } from '@/components'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollDisabled, scrollColor } = useScrollStore()

  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" sizes="any" />
      </Head>
      <LayoutProvider>
        <body
          className={`${scrollDisabled && 'overflow-hidden'} ${scrollColor}`}
        >
          <NavBar />
          {children}
          <Cursor />
          <Footer />
        </body>
      </LayoutProvider>
    </html>
  )
}
