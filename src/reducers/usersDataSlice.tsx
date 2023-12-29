import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SET_USER } = usersDataSlice.actions;

export default usersDataSlice.reducer;
