
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice'
import { RootState } from './redux/store'
import { useAppDispatch, useAppSelector } from './redux/hook'
import { Button } from './components/ui/button'

function App() {

  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state: RootState)=> state.counter)
  const handleIncrement= (amount:number)=>{
    dispatch(increment({amount}))
  }
  const handleDecrement= ()=>{
    dispatch(decrement())
  }
  return (
    <div>
      <h1>Counter with redux</h1>
      <div>{count}</div>
      <button onClick={() => handleIncrement(1)}>inc</button>
      <button onClick={handleDecrement}>dec</button>
      <Button onClick={()=>handleIncrement(5)}>inc by 5</Button>
    </div>
  )
}

export default App
