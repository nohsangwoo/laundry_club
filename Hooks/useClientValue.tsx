import { useQuery } from '@tanstack/react-query'

export const useClientValue = (key, initialData) =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data
