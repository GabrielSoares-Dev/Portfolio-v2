'use client'
import Badge from '@components/Badge'
import CardsFrotend from './objects/cards-frotend'
import CardsBackend from './objects/cards-backend'
import Card from './components/Card'

export default function Skils() {
  return (
    <section className="relative pt-28 pb-36 bg-blueGray-100 overflow-hidden">
      <img
        className="absolute top-0 left-0"
        src="flaro-assets/images/logos/gradient3.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex justify-center mb-10">
          <Badge content="HABILIDADES" />
        </div>
        <div>
          <div className="flex justify-center mb-5">
            <h1 className="mb-4 text-white text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Frontend
            </h1>
          </div>
          <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
            {CardsFrotend.map((element) => (
              <Card key={element.id} Icon={element.Icon} />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-center">
            <h1 className=" text-white text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Backend
            </h1>
          </div>
          <div className="flex flex-wrap max-w-5xl mx-auto mt-10">
            {CardsBackend.map((element) => (
              <Card key={element.id} Icon={element.Icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
