import React from 'react';
import VideoList from '../../../../widgets/VideosList/videosList';


const VideosMain = () => (
    <VideoList
        type="card"
        title={false}
        loadMore={true}
        start={0}
        amount={8}
    />
)

export default VideosMain;