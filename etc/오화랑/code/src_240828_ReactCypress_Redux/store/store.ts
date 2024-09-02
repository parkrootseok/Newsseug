import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

/**
 * IMP : 아래와 같은 방식으로 여러 개의 Slice를 정의할 수 있다.
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/**
 * * typeof store.getState => 현재 Store의 상태를 반환하는 함수
 * * ReturnType Utility Type을 사용하여 추론함 -> RootState
 * * ReturnType : TS에서 제공하는 Utility Type => 특정 함수의 반환 타입을 추출하는데 사용함.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * * AppDispatch Type : Store의 dispatch Method의 Type을 정의함.
 * IMP : Redux의 Action을 Dispatch할 때, Type 안정성을 도모함. ( Redux Action을 Store에 전달하는 함수 )
 */
export type AppDisptach = typeof store.dispatch;
