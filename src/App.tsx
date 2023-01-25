import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {dataFunc, errFunc} from './redux/slice'
function App() {
  const [st, setSt] = useState(false)
  const dispatch = useDispatch()
  const selectorData = useSelector((state:any)=>state.data.loading.loadGreat)
  const selectorLoading = useSelector((state: any)=>state.data.loading.loadTxt) 
  console.log(selectorData)
  const func = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
      console.log(res.data)
      setSt(!st)
      dispatch(dataFunc(res.data))
      
    }).catch(err=>dispatch(errFunc(err)))
  }

  return (
    <div className="App">
      <button onClick={()=>func()}>Нажать</button>
      <div>{selectorData ? selectorData.title : selectorLoading}</div>
    </div>
  );
}

export default App;
