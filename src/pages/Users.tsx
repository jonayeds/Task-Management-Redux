import AddUserModal from "@/components/module/users/AddUserModal"
import UserCard from "@/components/module/users/UserCard"
import { selectUsers } from "@/redux/features/user/userSlice"
import { useAppSelector } from "@/redux/hook"

const Users = () => {
  const users = useAppSelector(selectUsers)
  console.log(users)
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <AddUserModal/>
      <div className="mt-6 grid grid-cols-4 gap-3">
        {
          users.users.map((user)=>(
            <UserCard key={user.id} user={user}/>
          ))
        }
      </div>
    </div>
  )
}

export default Users