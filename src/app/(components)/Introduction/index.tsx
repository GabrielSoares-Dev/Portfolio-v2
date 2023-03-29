/* eslint-disable @next/next/no-img-element */
'use client'
import { useIntroduction } from './hooks'
import Button from '@/components/Button'
import Lottie from 'react-lottie'
import options from '@/constants/developer-animation-options'

export default function Introduction() {
  const { ref } = useIntroduction()
  return (
    <div className=" pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p className="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">
              Gabriel Soares Maciel
            </p>

            <h1 className="text-white mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
              Desenvolvedor FullStack
            </h1>

            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              Sou apaixonado pelo desenvolvimento, costumo dizer que programar
              não é um trabalho e sim uma arte, então tenho total certeza que
              satisfarei suas necessidades.
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <div className="w-full sm:w-28">
                <Button label="Meu trabalho" variant="primary" />
              </div>
              <div className="w-full sm:w-28">
                <Button label="Contate-me" variant="secondary" />
              </div>
            </div>
          </div>

          <div className="h-72 overflow-hidden   lg:h-auto xl:w-5/12">
            <Lottie options={options} isClickToPauseDisabled />
          </div>
        </section>
      </div>
    </div>
  )
}
