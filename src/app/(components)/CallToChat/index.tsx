import Button from '@/components/Button'

export default function CallToChat() {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-4 text-white text-3xl md:text-4xl font-heading font-bold"
            contentEditable="false"
          >
            Converse comigo agora mesmo
          </h2>
          <p className="mb-6 text-gray-500 text-lg md:text-xl font-heading font-medium text-coolGray-500">
            Estou disponível para conversar com você em tempo real através de um
            chat. Se precisar de ajuda, tirar dúvidas ou simplesmente bater um
            papo, é só iniciar a conversa e estarei aqui para responder o mais
            rápido possível. Vamos conversar agora mesmo!
          </p>
          <div className="flex justify-center">
            <div className="w-full sm:w-32">
              <Button label="Iniciar chat" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
