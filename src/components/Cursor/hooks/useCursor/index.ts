import { useEffect, MouseEvent, useState } from 'react'
import { useMotionValue } from 'framer-motion'
export function useCursor() {
  const [mouseEnabled, setMouseEnabled] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      mouseY.set(event.clientY)
      mouseX.set(event.clientX)
    }
    const handleMouseOver = () => {
      setMouseEnabled(true)
    }
    const handleMouseOut = () => {
      setMouseEnabled(false)
    }
    // @ts-ignore
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    return () => {
      // @ts-ignore
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mouseX, mouseY, mouseEnabled])

  return {
    mouseX,
    mouseY,
    mouseEnabled,
  }
}
