import React from 'react';

const VideoDescription = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const URLSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log("URL:", URLSrc);
  return (
      <div>
        <div className="ui embed">
          <iframe title="video-player" src={URLSrc}/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
  );
};

export default VideoDescription;