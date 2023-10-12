import BookForm from './components/bookForm.tsx'
import BookPreview from './components/bookPreview.tsx'
import { FormProvider, useForm } from 'react-hook-form'
import { Book } from '../../types/BookTypes.ts'

const AddBook = () => {
  const methods = useForm<Book>()
  return (
    <div className="grid grid-cols-2 gap-10 mt-5 mb-5">
      <FormProvider {...methods}>
        <BookPreview />
        <BookForm />
      </FormProvider>
    </div>
  )
}

export default AddBook
