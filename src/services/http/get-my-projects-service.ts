import type { GetProjectServiceProps, Projects } from '@/services/types'
export const getMyProjectsService = async ({
  language,
  filter,
}: GetProjectServiceProps) => {
  const response = await fetch(
    `/api/my-projects?filter=${filter}&language=${language}`,
  )

  return response.json() as unknown as Projects[]
}
