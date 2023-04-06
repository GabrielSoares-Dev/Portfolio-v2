import { CardSkillProps } from './types'

export default function Card({ Icon }: CardSkillProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
      <div className="flex items-center justify-center py-5 px-5 h-full bg-black border-2 border-primary rounded-3xl">
        <Icon fontSize={40} className="fill-primary" />
      </div>
    </div>
  )
}
