'use client'
import { useState } from 'react'
import { CardSkillProps } from './types'

export default function Card({ Icon }: CardSkillProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
      <div className="relative flex items-center justify-center py-5 px-5 h-full bg-black border-2 border-primary rounded-3xl">
        <div className="hover:opacity-50">
          <Icon fontSize={40} className="fill-primary " />
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100   flex items-center justify-center">
          <p className="text-white font-semibold text-xl">Texto que aparece</p>
        </div>
      </div>
    </div>
  )
}
