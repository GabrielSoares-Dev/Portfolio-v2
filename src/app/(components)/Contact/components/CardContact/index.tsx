import { CardContactProps } from './types'

export default function CardContact({
  text,
  title,
  socials,
  Icon,
}: CardContactProps) {
  return (
    <div className="w-full md:w-1/3 px-4 mb-10 md:mb-0">
      <div className="max-w-xs mx-auto text-center">
        <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-black border-2 border-primary rounded-full ">
          <Icon className="fill-primary" fontSize={25} />
        </div>
        <h3 className="mb-2 text-white text-2xl md:text-3xl leading-9  font-bold">
          {title}
        </h3>
        <p className="text-gray-500 text-xl  font-medium">{text}</p>
        <div className="flex justify-center  mt-5">
          {socials
            ? socials?.map((element) => (
                <div key={element.id}>
                  <a
                    className="inline-block mr-8 text-green-500 hover:text-green-600"
                    target="_blank"
                    href={element.link}
                    rel="noreferrer"
                  >
                    <element.Icon fontSize={18} className="fill-primary " />
                  </a>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
