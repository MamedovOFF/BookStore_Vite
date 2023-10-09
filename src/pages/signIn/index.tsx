import Form from './components/form'
const SignIn = () => {
  return (
    <div className="flex flex-col gap-2 bg-teal-300 rounded max-w-2xl m-4 drop-shadow-xl md:m-auto">
      <div className="flex flex-col gap-5 items-center pt-4">
        {/*<img src={viteImg} alt="logo" />*/}
        <h1 className="text-center text-black font-bold text-lg">
          Sign in to your account
        </h1>
      </div>
      <Form />
    </div>
  )
}

export default SignIn
