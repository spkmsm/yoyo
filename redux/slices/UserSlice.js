import {createSlice} from '@reduxjs/toolkit';

const initialValues = {
  status: 'organization',
};

const userSlice = createSlice({
  name: 'useSlice',
  initialState: initialValues,
  reducers: {
    changeUserStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const {changeUserStatus} = userSlice.actions;

export default userSlice.reducer;
