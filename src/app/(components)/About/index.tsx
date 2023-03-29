/* eslint-disable @next/next/no-img-element */
'use client'
import { useAbout } from './hooks'
import Button from '@/components/Button'
import Image from 'next/image'

export default function About() {
  const { ref } = useAbout()
  return (
    <section className="py-36 bg-blueGray-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
          <div className="w-full md:w-1/2 p-8 lg:p-14">
            <div className="relative max-w-max mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-2xl">
              <Image
                width={500}
                height={400}
                className="transform  hover:scale-105 transition ease-in-out duration-1000"
                src="/images/eu.jpg"
                alt="eu"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 lg:p-14">
            <div className="md:max-w-sm">
              <h2 className="mb-8 text-white text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                Gabriel Soares Maciel
              </h2>
              <p className="mb-7 text-lg text-gray-500 font-medium">
                Olá meu nome é Gabriel, tenho 22 anos e moro na cidade de
                Salto,SP. Estou Aberto a trabalhos Freelancer, construo apis,
                aplicações mobile e websites como landing pages e sistemas para
                sua empresa, entre em contato comigo.
              </p>
            </div>
            <div className="md:w-40">
              <Button label="Contate-me" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
