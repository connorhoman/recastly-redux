import Redux from 'redux';
 

//TODO: define a reducer for the currentVideo field of our state.
var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } 
  return state;
};

export default currentVideoReducer;
