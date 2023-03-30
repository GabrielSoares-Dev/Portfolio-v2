import type { CardServicesProps } from './types'

export default function Card({ Icon, text, title }: CardServicesProps) {
  return (
    <div className="w-full mt-5 md:w-1/2 lg:w-1/3 px-4">
      <div className="h-full p-8 text-center border-2  rounded-md hover:shadow-xl border-primary transition duration-200">
        <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center bg-green-500 rounded-lg">
          <Icon className="fill-white" fontSize={30} />
        </div>
        <h3 className="mb-4 text-xl text-white md:text-2xl leading-tight font-bold">
          {title}
        </h3>
        <p className="text-gray-500 font-medium">{text}</p>
      </div>
    </div>
  )
}
