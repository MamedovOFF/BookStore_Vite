import Input from '../../../components/input'
import Button from '../../../components/button'
import { useStore } from '../../../context/StoreContext.tsx'
import { FormEventHandler } from 'react'
import Textarea from '../../../components/textarea'
import DropDown from '../../../components/dropdown/inidex.tsx'

const BookForm = () => {
  const {
    ecommerceStore: { addBook },
  } = useStore()
  const formSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await addBook(formData)
  }
  return (
    <form
      onSubmit={formSubmit}
      className="flex flex-col gap-4 bg-emerald-200 p-4 rounded w-full"
    >
      <Input name="title" placeholder="Title" type="text" />
      <Input name="type" placeholder="Type" type="text" />
      <Input name="price" placeholder="Price" type="number" />
      <Input name="ISBN" placeholder="ISBN" type="number" />
      <Input name="amount" placeholder="Amount" type="number" />
      <DropDown />
      <Textarea name="description" placeholder="Description" />
      <Input name="image" type="file" />
      <Button type="submit">Send</Button>
    </form>
  )
}

export default BookForm
