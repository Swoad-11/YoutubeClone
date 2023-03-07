import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import videoReducer from '../features/video/videoSlice';
import tagsReducer from '../features/tags/tagsSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    tags: tagsReducer,
    filter: filterReducer
  },
});
