import Input from '../../../../components/input'
import Button from '../../../../components/button'
import { useForm } from 'react-hook-form'
import ErrorSpan from '../../../../components/errorSpan'
import { useStore } from '../../../../context/StoreContext.tsx'

type FormValues = {
  name: string
  email: string
  password: string
}
const Form = () => {
  const {
    userStore: { signUp },
  } = useStore()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' })
  const onSubmit = async (data: FormValues) => {
    await signUp(data)
  }

  return (
    <form className="flex flex-col gap-2 p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <Input
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
        />
        {errors?.name && (
          <ErrorSpan>{errors.name.message ?? 'Error'}</ErrorSpan>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Input
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
        />
        {errors?.email && (
          <ErrorSpan>{errors.email.message ?? 'Error'}</ErrorSpan>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Input
          placeholder="Password"
          {...register('password', {
            required: 'This Field is required',
            minLength: {
              value: 6,
              message: 'Min length 6',
            },
          })}
        />
        {errors?.password && (
          <ErrorSpan>{errors.password.message ?? 'Error'}</ErrorSpan>
        )}
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  )
}

export default Form
