'use client'
import Card from './components/Card'
import Cards from './domains/cards'
import { useServices } from './hooks'
import Badge from '@/components/Badge'

export default function Services() {
  const { ref } = useServices()
  return (
    <section
      className="py-24 md:pb-32 bg-black"
      style={{
        backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
        backgroundPosition: 'center',
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-4xl mb-12 mx-auto text-center">
          <Badge content="SERVIÇOS" />
          <h1 className="mb-4 text-white text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
            Transformando ideias em realidade através da tecnologia
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Ofereço serviços de desenvolvimento de software personalizado,
            aplicativos móveis, websites e APIs para ajudar empresas e
            empreendedores a atingir seus objetivos de negócios com soluções
            tecnológicas inovadoras.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {Cards.map((element) => (
            <Card
              key={element.id}
              title={element.title}
              Icon={element.Icon}
              text={element.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
