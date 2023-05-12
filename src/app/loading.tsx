'use client'
import Lottie from 'react-lottie'
import options from '@constants/loading-options-animation'
import { checkIsTheme } from '@/functions'
import { useTheme } from '@/hooks'

export default function Loading() {
  const { theme } = useTheme()
  return (
    <div
      className={`w-full  h-screen  ${
        checkIsTheme(theme, 'DARK') ? 'bg-primary-dark' : 'bg-primary-white'
      }`}
    >
      <Lottie isClickToPauseDisabled width={200} options={options} />
    </div>
  )
}
