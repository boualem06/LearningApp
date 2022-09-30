import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

export const CurrentUserSlice = createSlice({
  name: "currentuser",
  initialState: { value: initialStateValue },
  reducers: {
    setCurrentUser:(state, action) => {
        state.value = action.payload;
      },
  },
});

export const { setCurrentUser } = CurrentUserSlice.actions;

export default CurrentUserSlice.reducer;