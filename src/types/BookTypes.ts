export type Book = {
  id: number
  created_at: string
  updated_at: string
  title: string
  author_id: any
  images: Image[]
}

export type Image = {
  id: number
  image: string
  url: string
  created_at: string
  updated_at: string
  book_id: number
}
