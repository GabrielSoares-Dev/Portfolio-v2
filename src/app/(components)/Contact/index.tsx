/* eslint-disable react/no-unescaped-entities */
import CardContact from './components/CardContact'
import Badge from '@/components/Badge'

import Cards from './domains/cards'
export default function Contact() {
  return (
    <section className="pt-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Badge content="CONTATO" />
          <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-white font-bold tracking-tighter">
            Entre em contato comigo
          </h3>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Se você precisa de um desenvolvedor habilidoso para o seu próximo
            projeto, não precisa procurar mais! Entre em contato comigo hoje
            mesmo e vamos trabalhar juntos para alcançar seus objetivos. Estou
            ansioso para ouvir de você!
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 pb-16">
          {Cards.map((element) => (
            <CardContact
              Icon={element.Icon}
              text={element.text}
              title={element.title}
              key={element.id}
              socials={element.socials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
