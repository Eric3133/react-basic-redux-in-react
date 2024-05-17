import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  // initial state
  // 初始数据状态
  initialState: {
    count: 0
  },
  // change the state
  // 修改数据的同步方法
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

// export the actions 解构出创建action对象的函数（actionCreater）
 const { increment, decrement, addToNum } = counterStore.actions

 // export the reducer 获取reducer函数

 const reducer = counterStore.reducer

 //导出创建action对象的函数和reducer函数
 // 按需方式导出 actionCreater

  export { increment, decrement, addToNum }
// 默认方式导出reducer
  export default reducer
