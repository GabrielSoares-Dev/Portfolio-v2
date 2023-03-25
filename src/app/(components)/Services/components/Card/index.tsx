import type { CardServicesProps } from './types'

export default function Card({ title, text, Icon }: CardServicesProps) {
  return (
    <div className="w-[20rem] h-[18rem] border-2 mx-[80px]  border-white">
      <div className="flex items-center flex-col mt-14">
        <div>
          <Icon className="fill-primary" fontSize={70} />
        </div>
        <div className="mt-5">
          <h3 className="text-white uppercase font-semibold text-lg">
            {title}
          </h3>
        </div>
        <div className="mt-2">
          <p className="text-white text-sm leading-5 text-center w-56 font-medium">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
