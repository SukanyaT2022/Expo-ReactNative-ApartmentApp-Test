import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterSliceProp {
id: number;
}

const initialState: CounterSliceProp = { id:0};

const counterSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
  storeProductID: (state,action)=>{
    state.id = action.payload
  }

  },
});

export const {storeProductID} = counterSlice.actions;
export default counterSlice.reducer;