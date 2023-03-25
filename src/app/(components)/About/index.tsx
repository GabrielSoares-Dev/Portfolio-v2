/* eslint-disable react/no-unescaped-entities */
'use client'
import { useAbout } from './hooks'
import { personInformations } from './domains'

export default function About() {
  const { ref } = useAbout()
  return (
    <section
      ref={ref}
      id="about"
      className="container mx-auto w-screen mt-[10rem]"
    >
      <div className="flex items-center flex-col ">
        <div>
          <h1 className="text-white text-4xl font-bold">SOBRE</h1>
        </div>
        <div className="mt-5 w-[80rem]">
          <p className="text-white m-0 text-center text-2xl font-medium">
            Olá meu nome é Gabriel, sou Desenvolvedor Full Stack extremamente
            apaixonado pela arte do desenvolvimento, costumo dizer que o meu
            trabalho não é um trabalho na realidade, e sim uma
            "diversão".Costumo produzir meu sistemas com as linguagens de
            programação JavaScript e PHP, sempre busco desenvolver da melhor
            maneira possível para evitar problemas ao cliente.
          </p>
        </div>
      </div>
      <div>
        {personInformations.map((element) => (
          <div key={element.id}>
            <p className="text-white">
              {element.label} <span>{element.value}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
