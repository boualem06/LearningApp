import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { members:[]};

export const ConversationSlice = createSlice({
  name: "conversation",
  initialState: { value: initialStateValue },
  reducers: {
    setConversation:(state, action) => {
        state.value = action.payload;
      },
  },
});

export const { setConversation } = ConversationSlice.actions;

export default ConversationSlice.reducer;