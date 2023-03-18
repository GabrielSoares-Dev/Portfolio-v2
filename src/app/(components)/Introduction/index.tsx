'use client'
import useIntroduction from './hooks/useIntroduction'
import Button from '@/components/Button'
import Image from 'next/image'

export default function Introduction() {
  const { ref } = useIntroduction()
  return (
    <section id="introduction" className="container h-screen">
      <div className="flex flex-row justify-evenly  lg:px-52 2xl:px-[21rem]">
        <div className="flex flex-col">
          <div className="flex justify-start mt-52">
            <h1 ref={ref} className="text-4xl text-primary font-bold">
              OLÁ,
            </h1>
          </div>
          <div className="">
            <h1 className="text-5xl mt-6 text-white font-semibold">
              Sou Desenvolvedor Fullstack
            </h1>
          </div>
          <div className="w-2/3 mt-5">
            <p className="text-base text-white font-normal">
              Sou Desenvolvedor Full Stack com 2 anos de experiencia. Crio
              Websites,Aplicações Mobiles,Apis e muito mais...
            </p>
          </div>
          <div className="w-32 mt-8">
            <Button label="Contrate-me" />
          </div>
        </div>
      </div>
    </section>
  )
}
