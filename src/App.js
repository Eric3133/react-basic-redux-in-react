
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

// import acton creators
import { increment, decrement, addToNum } from './store/modules/counterStore';
import { fetchChannelList } from './store/modules/channelStore';
import { useEffect } from 'react';

function App() {
  // counter module
  const { count } = useSelector((state) => state.counter)
  const {channelList} = useSelector((state) => state.channel)
  const dispatch = useDispatch()
  // 使用useEffect调用异步action
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div className="App">
      <button onClick = {() => { dispatch(decrement()) }}>-</button>
      {count}
      {/* 调用dispatch 提交action 对象 */}
      <button onClick = { () => { dispatch(increment()) }}>+</button>
      <button onClick = { () => { dispatch(addToNum(10)) }}>add to 10</button>
      <button onClick = { () => { dispatch(addToNum(20)) }}>add to 20</button>
      <ul>
        {channelList.map((channel) => {
          return <li key = {channel.id}>{channel.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
