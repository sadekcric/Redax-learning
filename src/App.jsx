import { useDispatch, useSelector } from "react-redux";
import Increment from "./Components/Increment";
import TotalCount from "./Components/TotalCount";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((acc, curr) => acc + curr.value, 0);
  console.log(totalCount);

  const incrementFunc = (counterId) => {
    dispatch(increment(counterId));
  };

  const decrementFunc = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <>
      {counters.map((counter) => (
        <Increment
          key={counter.id}
          count={counter.value}
          incrementFunc={() => incrementFunc(counter.id)}
          decrementFunc={() => decrementFunc(counter.id)}
        />
      ))}

      <TotalCount count={totalCount} />
    </>
  );
}

export default App;
