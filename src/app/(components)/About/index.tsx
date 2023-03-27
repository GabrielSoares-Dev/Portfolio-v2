/* eslint-disable react/no-unescaped-entities */
'use client'
import { useAbout } from './hooks'
import { personInformations } from './domains'
import PersonInfo from './components/PersonInfo'

export default function About() {
  const { ref } = useAbout()
  return (
    <section
      ref={ref}
      id="about"
      className="container mx-auto w-screen mt-[10rem]"
    >
      <div className="flex  flex-col ">
        <div className="flex justify-center">
          <h1 className="text-white text-4xl font-bold">SOBRE</h1>
        </div>
        <div className="flex justify-center mt-5 ">
          <p className="text-white m-0 text-center text-2xl font-medium">
            Olá meu nome é Gabriel, sou Desenvolvedor Full Stack extremamente
            apaixonado pela arte do desenvolvimento, costumo dizer que o meu
            trabalho não é um trabalho na realidade, e sim uma
            "diversão".Costumo produzir meu sistemas com as linguagens de
            programação JavaScript e PHP, sempre busco desenvolver da melhor
            maneira possível para evitar problemas ao cliente.
          </p>
        </div>

        <div className="mt-14 flex flex-col">
          {personInformations.map((element) => (
            <PersonInfo
              key={element.id}
              label={element.label}
              value={element.value}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
