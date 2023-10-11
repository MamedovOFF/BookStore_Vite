import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

const Textarea = (
  props: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
) => {
  return (
    <textarea
      className="p-2 rounded border-stone-700 focus:border-red-50 outline-0 outline focus:outline-1 focus:outline-blue-600"
      {...props}
    />
  )
}
export default Textarea
