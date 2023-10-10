import Input from '../../components/input'
import Button from '../../components/button'
import { FormEventHandler } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../context/StoreContext.tsx'

const AddBook = () => {
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
      className="flex flex-col gap-4 bg-emerald-200 p-4 rounded"
    >
      <Input name="title" placeholder="Title" type="text" />
      <Input name="image" type="file" />
      <Button type="submit">Send</Button>
    </form>
  )
}

export default observer(AddBook)
