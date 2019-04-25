import Redux from 'redux';

//TODO: define a reducer for the videoList field of our state.
var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return state;
};

export default videoListReducer;
