import { useStore } from '../../../context/StoreContext.tsx'
import { FormEventHandler } from 'react'
import { Button, Input, Textarea } from '@material-tailwind/react'

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
      className="flex flex-col gap-4 bg-emerald-200 p-4 rounded w-full bg-white"
    >
      <Input name="title" label="Title" type="text" crossOrigin />
      <Input name="type" label="Type" type="text" crossOrigin />
      <div className="flex gap-2">
        <Input
          name="price"
          label="Price"
          type="number"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          crossOrigin
        />
        <Input name="ISBN" label="ISBN" type="number" crossOrigin />
        <Input name="amount" label="Amount" type="number" crossOrigin />
      </div>
      <Textarea name="description" label="Description" />
      <div>
        <label
          htmlFor="files"
          className=" bg-blue-50 p-4 w-fit flex gap-2 shadow-lg hover:opacity-75 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Select Images
        </label>
        <input id="files" type="file" className="hidden" />
      </div>

      <Button type="submit">Send</Button>
    </form>
  )
}

export default BookForm
