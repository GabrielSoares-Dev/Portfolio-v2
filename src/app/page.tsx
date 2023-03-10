import Image from 'next/image'

export default function Home() {
  return (
    <section className="container mx-auto w-screen">
      <div className="flex flex-col">
        <div className="flex justify-center mt-16">
          <h1 className="text-4xl font-extrabold">
            Desenvolvedor Full Stack & Desenvolvedor Mobile
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <p className="text-2xl font-normal">
            Construo sites e aplicativos, e amo de coração isso.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            className="rounded-full bg-primary"
            src="/selfie.jpg"
            alt="selfie"
            width={200}
            height={50}
          />
        </div>
      </div>
    </section>
  )
}
