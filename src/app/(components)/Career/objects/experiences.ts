import { CardExperienceProps } from '@app/(components)/Career/types'

type CardExperienceObject = CardExperienceProps & {
  id: number
}

export const experiences: CardExperienceObject[] = [
  {
    id: 1,
    position: 'Desenvolvedor Full Stack Jr',
    dateInPosition: 'Atual',
    where: {
      city: 'Barueri',
      district: 'Alphaville',
      nameCompany: 'Control 361°',
      state: 'São Paulo',
    },
  },
]
