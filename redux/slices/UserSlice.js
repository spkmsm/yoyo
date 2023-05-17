import {createSlice} from '@reduxjs/toolkit';

const initialValues = {
  status: 'organization',
  phoneNumber: '',
};

const userSlice = createSlice({
  name: 'useSlice',
  initialState: initialValues,
  reducers: {
    changeUserStatus: (state, action) => {
      state.status = action.payload.status;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

export const {changeUserStatus} = userSlice.actions;

export default userSlice.reducer;
