import type { PersonInfoProps } from './types'
import { MdLabelImportant } from 'react-icons/md'

export default function PersonInfo({ label, value }: PersonInfoProps) {
  return (
    <div className="flex flex-row items-center">
      <MdLabelImportant className="fill-primary" fontSize={25} />
      <p className="text-primary text-xl font-semibold ml-2">
        {label} <span className="text-white font-medium">{value}</span>
      </p>
    </div>
  )
}
