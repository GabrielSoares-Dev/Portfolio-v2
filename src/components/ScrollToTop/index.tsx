import { AiOutlineArrowUp } from 'react-icons/ai'
export function ScrollToTop() {
  return (
    <a
      className="fixed bottom-5 right-5 z-[100] animate-bounce inline-block rounded-full bg-primary transition duration-500  bg-danger p-2 uppercase leading-normal text-white"
      href="#introduction"
    >
      <AiOutlineArrowUp className="fill-white text-xl" />
    </a>
  )
}
