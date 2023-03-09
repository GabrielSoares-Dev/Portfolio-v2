/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import '@/app/global.css'
import Head from 'next/head'
import Layout from '@/components/Layout'
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
