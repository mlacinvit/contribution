import { createSlice } from '@reduxjs/toolkit';

const name = 'contribition';

export const initialState = {
    contribitions: {},
    loading: false,
    error: null,
};

const contribitionsSlice = createSlice({
  name,
  initialState,
  reducers: {
    getContribitionRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getContribitionSuccess(state, action) {
      state.loading = false;
      state.contribitions = action.payload;
    },
    getContribitionFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default contribitionsSlice;
