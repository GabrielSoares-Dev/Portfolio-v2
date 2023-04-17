'use client'
import { motion, useMotionValue } from 'framer-motion'
import { useEffect, MouseEvent } from 'react'
import { BsFillCursorFill } from 'react-icons/bs'

export function Cursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      mouseY.set(event.clientY)
      mouseX.set(event.clientX)
    }
    // @ts-ignore
    window.addEventListener('mousemove', mouseMove)

    return () => {
      // @ts-ignore
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none"
      style={{ translateX: mouseX, translateY: mouseY }}
    >
      <BsFillCursorFill
        fontSize={25}
        className="rotate-[280deg] fill-primary"
      />
    </motion.div>
  )
}
