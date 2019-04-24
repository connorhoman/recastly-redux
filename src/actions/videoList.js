//TODO:  Return some action object to change the list of videos in VideoList.
var changeVideoList = (videos) => ({
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;
