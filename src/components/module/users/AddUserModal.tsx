import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addUser, DraftUser } from "@/redux/features/user/userSlice"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

const AddUserModal = () => {
    const form = useForm()
    const dispatch = useDispatch()
    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        dispatch(addUser(data as DraftUser))
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Fillup this form to add User
        </DialogDescription>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button className="mt-4" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AddUserModal