export type BookData = {
    book: Book
    images: Image[]
}

export type Book = {
    id: number
    created_at: string
    updated_at: string
    title: string
    author_id: any
}

export type Image = {
    id: number
    image: string
    url: string
    created_at: string
    updated_at: string
    book_id: number
}
