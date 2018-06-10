import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import VideoList from './features/VideoList'
import store from './utils/store'

ReactDOM.render(<Provider store={store}>
  <VideoList/>
</Provider>, document.getElementById('root'))