import { useGetTasksQuery } from "@/redux/api/baseApi";


const Tasks = () => {
  const {data, isLoading, isError} = useGetTasksQuery(undefined)
  console.log(data,isLoading, isError)
  return (
    <div className="container  mx-auto">
      <h1 className="text-3xl text-center mt-10 mb-6">Your Tasks</h1>
      <div className="flex justify-center">
      </div>
      {/* <Tabs defaultValue="All" className="mx-auto my-6 max-w-[70vw]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="All" onClick={()=>dispatch(updateFilter("All"))}>All</TabsTrigger>
        <TabsTrigger value="Low" onClick={()=>dispatch(updateFilter("Low"))}>Low</TabsTrigger>
        <TabsTrigger value="Medium" onClick={()=>dispatch(updateFilter("Medium"))}>Medium</TabsTrigger>
        <TabsTrigger value="High" onClick={()=>dispatch(updateFilter("High"))}>High</TabsTrigger>
      </TabsList>
      </Tabs> */}
    </div>
  );
};

export default Tasks;
