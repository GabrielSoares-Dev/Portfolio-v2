'use client'
import Lottie from 'react-lottie'
import options from '@constants/loading-options-animation'

export default function Loading() {
  return (
    <div className="container mx-auto h-screen w-screen">
      <Lottie isClickToPauseDisabled width={200} options={options} />
    </div>
  )
}
