/**
 * IMP : counter Slice에 관한 것들은 여기서 정의된다.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

/**
 * createSlice는 많은 이득을 가지고 옴.
 * * => Reducer에 바로 접근을 가질 수 있도록 도와준다.
 * * => 이것이 없다면, 똑같은 기능을 위한 BoilerPlate Code가 많아진다.
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // ! 분명하게, Reducer는 state의 값을 직접적으로 바꾸지 못한다고 했는데, 바꾸는 느낌이 드러나는 코드임.
      // IMP : createSlice가 개발자를 위해서, Behind the Scene에서 여러 작동을 해주는 것임. => Copy해서 값을 바꾸고 값을 바꿔주는 동작을 해주는 것임.
      // IMP : State의 Update를 다루는 Reducer가 쉽게 정의되는 것은 알겠지만, 이를 어떻게 Action으로 불러낼 것인가? => 이것도 매우 쉽게 가능함.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // payload를 사용할 수 있으며, payload는 Type을 가지고 있음
      state.value += action.payload;
    },
  },
});

/**
 * * export default를 통해, counterSlice의 reducer를 다른 곳에도 사용할 수 있음
 */
export const { increment, incrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;
