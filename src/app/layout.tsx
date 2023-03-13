/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import '@/app/global.css'
import Head from 'next/head'
import NavBar from '@/components/Layout/NavBar'

export const metadata = {
  title: 'Gabriel Soares Maciel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
