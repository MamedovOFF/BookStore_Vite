import BookForm from './components/bookForm.tsx'
import BookPreview from './components/bookPreview.tsx'
import { FormProvider, useForm } from 'react-hook-form'
import { Book } from '../../types/BookTypes.ts'
import { useStore } from '../../context/StoreContext.tsx'
import { useParams } from 'react-router-dom'

const BookConstructor = () => {
  const {
    ecommerceStore: { getBook },
  } = useStore()
  const { id } = useParams()

  const methods = useForm<Book>({
    defaultValues: async () => {
      if (id) return getBook(id)
    },
  })
  return (
    <div className="grid grid-cols-2 gap-10 mt-5 mb-5">
      <FormProvider {...methods}>
        <BookPreview />
        <BookForm />
      </FormProvider>
    </div>
  )
}

export default BookConstructor
