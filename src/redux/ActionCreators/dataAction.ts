import axios from "axios";
import {dataSlice} from "../dataSlice";
import {AppDispatch} from "../store";

export const fetchData = () => async (dispatch: AppDispatch) => {
     try {
         dispatch(dataSlice.actions.dataFetching())
         const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
         dispatch(dataSlice.actions.dataFetchingSuccess(data))
     } catch (e) {
         dispatch(dataSlice.actions.dataFetchingError(e.message))
     }
}