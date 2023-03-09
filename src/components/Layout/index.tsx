import React from 'react'
import NavBar from './NavBar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  )
}
