'use client'
import { motion } from 'framer-motion'
import { BsFillCursorFill } from 'react-icons/bs'
import { useCursor } from './hooks'

export function Cursor() {
  const { mouseX, mouseY, mouseEnabled } = useCursor()

  return mouseEnabled ? (
    <motion.div
      className="hidden sm:block fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none"
      style={{ translateX: mouseX, translateY: mouseY }}
    >
      <BsFillCursorFill
        fontSize={25}
        className="rotate-[280deg] fill-primary"
      />
    </motion.div>
  ) : null
}
