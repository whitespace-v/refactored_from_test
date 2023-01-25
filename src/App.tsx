import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchData} from "./redux/ActionCreators/dataAction";
const App = () => {
  const dispatch = useAppDispatch()

  const {loading, data, error} = useAppSelector(state => state.dataSlice)

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className="App">
      {loading && <p>Загрузка</p>}
      {error && <p>error</p>}
      {data && <p>{data.name}</p>}
    </div>
  );
}

export default App;
