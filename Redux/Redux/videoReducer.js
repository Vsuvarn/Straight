import {createSlice} from '@reduxjs/toolkit';
// import {loginACTION, lastactiveACTION} from '../../Redux-actions/authActions';
const INITIAL_STATE = {
  play: true,
  mute: false,
  video: [],
};

const videoReducer = createSlice({
  name: 'Videos',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = videoReducer.actions;
export default videoReducer.reducer;
