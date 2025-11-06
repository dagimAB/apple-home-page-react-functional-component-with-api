import { useState, useEffect } from "react";

function YouTubeVideos() {
  
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  const apiKey = import.meta.env.VITE_EVANGADI_API_KEY;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=6&order=date&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);


  return (
    <div className="videosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-12">
              <div className="tittle-wrapper">
                <br />
                <h1>Latest Evangadi videos</h1>
                <br />
              </div>
            </div>
            {youTubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDescription">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
