import { cn } from "@/lib/utils";
import { deleteUser, IUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { MdOutlineDeleteOutline } from "react-icons/md";
interface IProps {
    user:IUser
}
const UserCard = ({user}: IProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className="border border-gray-200 rounded-lg py-4 px-8 mt-4">
      <div className="flex justify-between min-w-[10vw] items-center">
        <div className="flex gap-3 items-center">
          <h2 className={cn("text-2xl")}>{user.name}</h2>
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-3"> 
          <div className="flex gap-3 items-center">
            <button onClick={()=> dispatch(deleteUser(user.id))}><MdOutlineDeleteOutline className="text-red-500 text-xl"/></button>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default UserCard;
