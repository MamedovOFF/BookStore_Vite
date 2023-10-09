import { Book } from '../../types/BookTypes.ts'
import Button from '../button'

const ruDate = new Intl.DateTimeFormat('ru')

const Card = (book: Book) => {
  return (
    <div className="rounded p-4 bg-white flex flex-col gap-4">
      <img
        src={`${import.meta.env.VITE_API_URL}${book?.images[0]?.url}`}
        alt="Image"
      />
      <div className="mt-auto">
        <p className="">{book.title}</p>
        <p className="">{ruDate.format(new Date(book?.updated_at))}</p>
      </div>
      <Button>Buy</Button>
    </div>
  )
}
export default Card
