import BookForm from './components/bookForm.tsx'
import BookPreview from './components/bookPreview.tsx'

const AddBook = () => {
  return (
    <div className="flex justify-between gap-2">
      <BookPreview />
      <BookForm />
    </div>
  )
}

export default AddBook
