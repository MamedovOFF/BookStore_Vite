import { Avatar, Carousel, Typography } from '@material-tailwind/react'
import { useFormContext } from 'react-hook-form'
import { useStore } from '../../../context/StoreContext.tsx'
import { computed } from 'mobx'
import { observer } from 'mobx-react-lite'
import no_image from '../../../assets/images/no_image.jpeg'
import { BookCreate } from '../types.ts'

const BookPreview = () => {
  const {
    ecommerceStore: { authors },
  } = useStore()
  const { watch } = useFormContext<BookCreate>()

  const values = watch()
  const author = computed(() =>
    authors.find((el) => el.id === values.author_id),
  ).get()

  // const deleteFile = (el: string) => {
  //   const filtersFile = [...values.images].filter((file) => file.name !== el)
  //   setValue('images', filtersFile)
  // }

  return (
    <div className="w-full bg-white rounded p-4">
      <figure className="relative h-96 w-full">
        <Carousel>
          {!!values?.image?.length ? (
            Array.from(values.image).map((el) => {
              return (
                <div className="h-full w-full relative">
                  <img
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={URL.createObjectURL(el)}
                    alt="nature image"
                  />
                </div>
              )
            })
          ) : (
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src={no_image}
              alt="nature image"
            />
          )}
        </Carousel>
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography
              variant="h5"
              color={`${values.title ? 'blue-gray' : 'gray'}`}
              placeholder="Title"
            >
              {values.title ? values.title : 'Title'}
            </Typography>
            <Typography
              color={`${values.ISBN && values.amount ? 'blue-gray' : 'gray'}`}
              className="mt-2 font-normal"
            >
              ISBN {values.ISBN} | Amount {values.amount}
            </Typography>
            <Typography
              color={`${values.price ? 'blue-gray' : 'gray'}`}
              className="mt-2 font-normal"
            >
              {values.price}$
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              src={`${
                author?.avatar
                  ? import.meta.env.VITE_API_URL + author?.avatar
                  : no_image
              }`}
              alt="avatar"
            />
            <Typography variant="h5" color={`${author ? 'blue-gray' : 'gray'}`}>
              {author?.name ? author.name : 'Author'}
            </Typography>
          </div>
        </figcaption>
      </figure>

      <div className="mt-2 bg-blue-gray-50 p-2 rounded">
        <Typography
          variant="paragraph"
          color={`${values.description ? 'blue-gray' : 'gray'}`}
          className="break-words"
        >
          {values.description ? values.description : 'Description'}
        </Typography>
      </div>
    </div>
  )
}

export default observer(BookPreview)
