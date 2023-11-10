export type ItemProps = {
  src?: string | null,
  link?: string,
  title: string,
  isHorizontal: number,
  tag1?: string | null,
  tag2?: string | null,
  year?: number | null
}

export type ItemWithYearProps = {
  src?: string | null,
  link?: string,
  title: string,
  isHorizontal: number,
  tag1?: string | null,
  tag2?: string | null,
  year: number
}