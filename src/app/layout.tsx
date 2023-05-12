'use client'
import React, { useEffect } from 'react'
import '@/app/global.css'
import Head from 'next/head'
import NavBar from '@/components/Layout/NavBar'
import { LayoutProvider } from '@/providers'
import Footer from '@/components/Layout/Footer'
import { useScrollStore } from '@/store/modules'
import { Cursor } from '@/components'
import { useTheme } from '@/hooks'

const metadata = {
  title: 'Gabriel Soares Maciel',
  description:
    'Gabriel Soares Maciel, desenvolvedor full-stack com 2 anos de experiência em projetos web e mobile. Meu portfólio apresenta uma seleção dos meus melhores trabalhos, que incluem desenvolvimento de aplicativos, websites, sistemas de gerenciamento de conteúdo e outras soluções personalizadas. Com habilidades em diversas linguagens de programação e ferramentas, estou preparado para oferecer soluções eficientes e de alta qualidade para atender às necessidades de seus projetos digitais. Confira meu portfólio e entre em contato para saber mais sobre como posso ajudá-lo a alcançar seus objetivos online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollDisabled } = useScrollStore()
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutProvider>
        <body className={`${scrollDisabled && 'overflow-hidden'} `}>
          <NavBar />
          {children}
          <Cursor />
          <Footer />
        </body>
      </LayoutProvider>
    </html>
  )
}
