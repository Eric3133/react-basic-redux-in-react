import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  // initia state
  initialState: {
    count: 0
  },
  // change the state
  reducers: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    addToNum(state, action) {
      state.count += action.payload
    }
  }
})

// export the actions 解构出来actionCreaters 函数
 const { increment, decrement, addToNum } = counterStore.actions

 // export the reducer 获取reducer

 const reducer = counterStore.reducer

 // 按需方式导出 actionCreater

  export { increment, decrement, addToNum }
// 默认方式导出reducer
  export default reducer
