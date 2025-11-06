import { useEffect, useState } from "react";



const AppleYouTubeVideos = () => {

    const [appleVideos, setAppleVideos] = useState([]);
    const apiKey = import.meta.env.VITE_APPLE_API_KEY;



    useEffect(() => {

        const getAppleVideos = async () => {

            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=${apiKey}`);

                const data = await response.json();
                console.log(data);
                setAppleVideos(data?.items)
                console.log(appleVideos);
            } catch (error) {
                console.log(error);
            }
        }

        getAppleVideos()

    }, [])



  return (
      <div className="videosWrapper">
          <div className="allVideosWrapper">
              <div className="container">
                  <div className="row justify-content-center ">
                      <div className="col-12">
                          <div className="tittle-wrapper">
                              <br />
                              <h1>Latest Apple videos</h1>
                              <br />
                          </div>
                      </div>
                      {appleVideos?.map((singleVideo, i) => {
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
  )
}

export default AppleYouTubeVideos