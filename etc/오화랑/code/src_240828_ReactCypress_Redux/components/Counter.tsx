import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { decrement, incrementByAmount } from '../store/counter/counterSlice';

export default function Counter() {
  // * React Redux의 Hook
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  /**
   * IMP : 지금은 Argument를 받아내고 있지 않는 상태
   * * => Argument를 정의해서 유동적인 코드를 작성
   */

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
