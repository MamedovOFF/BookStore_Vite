import { useStore } from '../../context/StoreContext.tsx'
import { observer } from 'mobx-react-lite'

const Profile = () => {
  const {
    userStore: { user },
  } = useStore()

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        // src={user.avatar}
        src={`${import.meta.env.VITE_API_URL}${user?.avatar}`}
        alt="User Avatar"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-2xl font-semibold text-primary">{user?.name}</h2>
      <p className="text-gray-600">{user?.email}</p>
      <div className="mt-4">
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none">
          Follow
        </button>
      </div>
    </div>
  )
}

export default observer(Profile)
