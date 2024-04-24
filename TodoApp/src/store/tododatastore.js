import { configureStore, createSlice } from "@reduxjs/toolkit";

//Creating Slice and their reducers
const todoSlice=createSlice({
  name:'items',
  initialState:{currVal:[]},
  reducers:{
    addItem:(state,action)=>{
    state.currVal=[...state.currVal,{inputData:action.payload.inputData,dateData:action.payload.dateData}]
    },
    deleteItem:(state,action)=>{
      state.currVal= state.currVal.filter(item=>item.inputData!=action.payload.inputData)
    },
  }
})
// createing Store
const todoStore=configureStore({reducer:{
  items:todoSlice.reducer
}})


// Exporting todoActions so that using useDispatch Hook we can access 
export const todoActions=todoSlice.actions;
// Exporting TodoStore so that it can import by component
export default todoStore;