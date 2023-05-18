import { AiOutlineArrowUp } from 'react-icons/ai'

export function ScrollToTop() {
  return (
    <button
      className="fixed bottom-5 right-5 z-[100] animate-bounce inline-block rounded-full bg-primary transition duration-500  bg-danger p-2 uppercase leading-normal text-white"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <AiOutlineArrowUp className="fill-white text-xl" />
    </button>
  )
}
