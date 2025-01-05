import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TTask, updateTask} from "@/redux/features/task/taskSlice";
import { DialogDescription } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function UpdateTaskModal({task}: {task:TTask}) {
  const form = useForm();
  const dispatch = useDispatch()
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    const updateData:TTask ={
      dueDate: data.dueDate.toISOString() || task.dueDate ,
      title: data.title || task.title ,
      priority: data.priority || task.priority ,
      description: data.description || task.description ,
      id: task.id ,
      isCompleted: task.isCompleted ,
    }
    dispatch(updateTask(updateData as TTask))
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Update Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Task Details</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Edit this form to update task
        </DialogDescription>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field}  value={field.value || task.title } />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || task.description} />
                  </FormControl>
                </FormItem>
              )}
            />
             <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>{task.dueDate.toString().substring(3,15) || "Pick a date"}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value || task.dueDate}
                    onSelect={field.onChange || task.dueDate}
                    disabled={(date) =>
                      date < new Date() 
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>

            </FormItem>
          )}
        />
            <FormField
              control={form.control}
              name="priority"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select
                    onValueChange={field.onChange || task.priority}
                    defaultValue={field.value || task.priority} 
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Priority" />
                      </SelectTrigger>
                      <SelectContent >
                        <SelectGroup>
                          <SelectLabel className="font-bold opacity-60">Priorities</SelectLabel>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
  );
}
export default UpdateTaskModal;
