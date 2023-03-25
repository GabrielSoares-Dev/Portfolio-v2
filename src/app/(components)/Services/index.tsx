import Card from './components/Card'
import Cards from './domains/cards'
export default function Services() {
  return (
    <div className="container  w-screen mt-24 mx-auto ">
      <div className="flex justify-center">
        <h1 className="text-white text-4xl font-bold">
          MEUS <span className="text-primary">SERVIÇOS</span>
        </h1>
      </div>
      <div className="flex justify-center my-20">
        {Cards.map((element) => (
          <Card
            key={element.id}
            Icon={element.Icon}
            text={element.text}
            title={element.title}
          />
        ))}
      </div>
    </div>
  )
}
