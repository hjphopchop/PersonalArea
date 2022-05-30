import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface modalState {
  isOpen: boolean;
}
const initialState: modalState  = {
    isOpen: false,
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = !state.isOpen;
    },
    
  },
});

export const { open } = modal.actions;
export const selectModal = (state: RootState) => state.modal.isOpen;
export default modal.reducer;
