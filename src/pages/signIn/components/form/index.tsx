import Input from '../../../../components/input'
import Button from '../../../../components/button'
import { useForm } from 'react-hook-form'
import ErrorSpan from '../../../../components/errorSpan'
import http from '../../../../config/http.ts'

type FormValues = {
  email: string
  password: string
}
const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' })
  const onSubmit = async () => {
    await http.get('/sanctum/csrf-cookie')
  }

  return (
    <form className="flex flex-col gap-2 p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <Input
          {...register('email', { required: 'Email is required' })}
          placeholder="Bill"
        />
        {errors?.email && (
          <ErrorSpan>{errors.email.message ?? 'Error'}</ErrorSpan>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Input
          placeholder="password"
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
      <Button type="submit">Sign In</Button>
    </form>
  )
}

export default Form
