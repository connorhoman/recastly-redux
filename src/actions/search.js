import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//TODO:  Write an asynchronous action to handle a video search!
var handleVideoSearch = (q) => function() { ({ 
    type: 'SEARCH_YOUTUBE',
    videos: searchYouTube({YOUTUBE_API_KEY, q}, (videosSearch) =>{
      changeVideo(videosSearch[0]),
      changeVideoList(videosSearch.slice(1))
    })
  });
}

export default handleVideoSearch;
