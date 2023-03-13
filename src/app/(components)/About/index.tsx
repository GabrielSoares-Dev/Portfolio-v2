'use client'
import usePage from '@/hooks/usePage/usePage'
import { useEffect } from 'react'
export default function About() {
  const { currentPage, setCurrentPage } = usePage()
  console.log(currentPage)
  return (
    <section
      onScroll={() => setCurrentPage('CONTACT')}
      id="about"
      className="container"
    >
      <div className="bg-primary w-screen h-96 p-28">
        <div>
          <h1 className="text-white text-center text-3xl font-bold">
            Olá, meu nome é Gabriel. Muito prazer em conhece-lo.
          </h1>
        </div>
        <div>
          <p className="text-white text-center text-xl font-medium">
            Iniciei minha carreira como Estagiário no ano de 2022, após 8 meses
            fui efetivado como Desenvolvedor Jr, e assim começou minha jornada
            nessa profissão apaixonante. Meu objetivo é sempre trazer inovações
            que de algum modo facilite a vida das pessoas.Sou uma pessoa calma,
            criativa,curiosa e proativa , que sempre buscar solucionar o
            problema do cliente e ajudar a equipe.
          </p>
        </div>
      </div>
    </section>
  )
}
