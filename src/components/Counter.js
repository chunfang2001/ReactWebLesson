import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { stateAction } from '../store/store';

const Counter = () => {
  const counter = useSelector(state=>state.state.counter)
  const showCounter = useSelector(state=>state.state.showCounter)

  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(stateAction.toggle())
  };

  const incrementCounterHandler = ()=>{
    dispatch(stateAction.increment())
  }

  const decrementCounterHandler = ()=>{
    dispatch(stateAction.decrement())
  }

  const increaseby5 = () =>{
    dispatch(stateAction.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter&&<div className={classes.value}>{counter}</div>}
      {showCounter&&<div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <button onClick={increaseby5}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
