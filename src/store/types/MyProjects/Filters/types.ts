type Filters = 'ALL' | 'LARAVEL' | 'NODEJS'
export type FilterState = {
  filter: Filters
  setFilter: (filter: Filters) => void
}
