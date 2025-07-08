import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import Memo from "./Memo.jsx"
import Selector from './Selector.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RecoilRoot> 
    {/* <App /> */}
    {/* <Memo/> */}
    <Selector/>
    </RecoilRoot>
 
)
