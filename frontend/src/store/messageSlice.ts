import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessageState {
  message: string;
}

const initialState: MessageState = {
  message: 'Hello, Redux!',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;