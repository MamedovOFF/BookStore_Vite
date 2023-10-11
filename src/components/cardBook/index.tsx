import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import { Book } from '../../types/BookTypes.ts'
import { ruDate } from '../../utils/DateFormater.ts'

const CardBook = (book: Book) => {
  console.log(book)
  return (
    <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={`${import.meta.env.VITE_API_URL}${book?.images[0].url}`}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {book.title}
        </Typography>
        <Typography>{book.description.substring(0, 200)}</Typography>
        <Typography color="blue-gray">Price: {book.price}$</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-end">
        <Button>Read More</Button>
        <Typography className="font-normal">
          {ruDate.format(new Date(book.updated_at))}
        </Typography>
      </CardFooter>
    </Card>
  )
}

export default CardBook
