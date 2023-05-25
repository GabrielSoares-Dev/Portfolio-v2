import { AiOutlineArrowUp } from 'react-icons/ai'

export function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="fixed cursor-none bottom-5 right-5 z-[100] animate-bounce inline-block rounded-full bg-primary transition duration-500  bg-danger p-2 uppercase leading-normal text-white"
    >
      <AiOutlineArrowUp className="fill-white text-xl" />
    </button>
  )
}
