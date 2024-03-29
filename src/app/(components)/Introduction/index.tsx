/* eslint-disable @next/next/no-img-element */
'use client'
import { useIntroduction } from './hooks'
import { Button } from '@/components'
import Lottie from 'react-lottie'
import options from '@/constants/developer-animation-options'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import {
  particlesAnimation,
  descriptionAnimation,
  nameAnimation,
  roleAnimation,
  buttonContactAnimation,
  buttonMyWorkAnimation,
  lottieAnimation,
} from './animations'
import { checkIsTheme, checkIsLanguage } from '@/functions'
import en from '@public/locales/en/home.json'
import ptBr from '@public/locales/pt/home.json'

export default function Introduction() {
  const {
    ref,
    theme,
    currentLanguage,
    typeAnimationKey,
    particlesInit,
    particlesLoaded,
  } = useIntroduction()

  return (
    <div
      id="introduction"
      ref={ref}
      className={`h-screen ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      } mt-20 pb-6 sm:pb-8 lg:pb-12 transition duration-500 `}
    >
      <div className="mx-auto px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <motion.p
              initial={nameAnimation.initial}
              animate={nameAnimation.animate}
              transition={nameAnimation.transition}
              className="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl"
            >
              Gabriel Soares Maciel
            </motion.p>
            <motion.div
              initial={roleAnimation.initial}
              animate={roleAnimation.animate}
              transition={roleAnimation.transition}
              className="mb-5"
            >
              <TypeAnimation
                sequence={
                  checkIsLanguage(currentLanguage, 'PT-BR')
                    ? [
                        ptBr.introduction.title.devFullStack,
                        3000,
                        ptBr.introduction.title.devMobile,
                        4000,
                        ptBr.introduction.title.devBackend,
                        5000,
                        ptBr.introduction.title.devFrontend,
                      ]
                    : [
                        en.introduction.title.devFullStack,
                        3000,
                        en.introduction.title.devMobile,
                        4000,
                        en.introduction.title.devBackend,
                        5000,
                        en.introduction.title.devFrontend,
                      ]
                }
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                key={typeAnimationKey}
                className={` ${
                  checkIsTheme(theme, 'DARK')
                    ? 'text-secondary-dark'
                    : 'text-secondary-white'
                }  mb-8 text-4xl font-bold sm:text-5xl xl:text-4xl   md:mb-12 2xl:text-[60px]`}
              />
            </motion.div>

            <motion.p
              initial={descriptionAnimation.initial}
              animate={descriptionAnimation.animate}
              transition={descriptionAnimation.transition}
              className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg"
            >
              {checkIsLanguage(currentLanguage, 'PT-BR')
                ? ptBr.introduction.description
                : en.introduction.description}
            </motion.p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                href="#projects"
                initial={buttonMyWorkAnimation.initial}
                animate={buttonMyWorkAnimation.animate}
                transition={buttonMyWorkAnimation.transition}
                className="w-full sm:w-28"
              >
                <Button
                  label={
                    checkIsLanguage(currentLanguage, 'PT-BR')
                      ? ptBr.introduction.btnMyWork
                      : en.introduction.btnMyWork
                  }
                  variant="primary"
                />
              </motion.a>
              <motion.a
                href="#contact"
                initial={buttonContactAnimation.initial}
                animate={buttonContactAnimation.animate}
                transition={buttonContactAnimation.transition}
                className="w-full sm:w-28"
              >
                <Button
                  label={
                    checkIsLanguage(currentLanguage, 'PT-BR')
                      ? ptBr.introduction.btnContactMe
                      : en.introduction.btnContactMe
                  }
                  variant="secondary"
                />
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={lottieAnimation.initial}
            animate={lottieAnimation.animate}
            transition={lottieAnimation.transition}
            className="h-72 overflow-hidden   lg:h-auto xl:w-5/12"
          >
            <Lottie options={options} isClickToPauseDisabled />
          </motion.div>
          <div className="absolute top-0 -z-1 left-0  h-full">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesAnimation as any}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
