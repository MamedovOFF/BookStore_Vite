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
import { useNavigate } from 'react-router-dom'

const CardBook = (book: Book) => {
  const navigate = useNavigate()
  return (
    <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative h-80">
        <img
          src={`${import.meta.env.VITE_API_URL}${book.images[0].url}`}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {book.title}
        </Typography>
        <Typography>{book.description.substring(0, 200)}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col gap-2 mt-auto">
        <Typography color="blue-gray" className="mt-auto">
          Price: {book.price}$
        </Typography>
        <div className="flex justify-between items-center">
          <Button onClick={() => navigate(`/book/${book.id}`)}>
            Read More
          </Button>
          <Typography className="font-normal">
            {ruDate.format(new Date(book.updated_at))}
          </Typography>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardBook
