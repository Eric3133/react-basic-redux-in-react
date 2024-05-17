import { createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload
    }
  }
})

// 异步请求
const { setChannelList } = channelStore.actions

// 单独封装一个函数 在函数内部return 一个异步函数
const fetchChannelList = () => {
  return  async (dispatch) => {
    // 封装一步请求获取数据
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    // 调用异步actioncreater传入数据生成一个action对象
    dispatch(setChannelList(res.data.data.channels))
  }
}

export { fetchChannelList }

const reducer = channelStore.reducer

export default reducer
