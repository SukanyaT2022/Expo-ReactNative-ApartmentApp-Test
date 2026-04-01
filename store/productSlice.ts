import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface productSliceProp {
id: number;
}

const initialState: productSliceProp = { id:0};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    //we need storeProductIID in all product
  storeProductID: (state,action)=>{
    state.id = action.payload
  }


  },
});

export const {storeProductID} = productSlice.actions;
export default productSlice.reducer;