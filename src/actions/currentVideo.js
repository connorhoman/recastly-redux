//TODO:  Return some action object to change the currently playing video.
var changeVideo = (video) => ({
    type: 'CHANGE_VIDEO',
    video: video,   
});

export default changeVideo;
