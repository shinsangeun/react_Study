import ReactPlayer from 'react-player/lazy';
import React, {useState} from "react";

function Video() {
// const Video = ({playList, index}) => {
    const [playIndex, setPlayIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = React.useRef();
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReady, setIsReady] = useState(false);


    const playList = [
        {index:1, url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
        {index:2, url: 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8'},
        {index:3, url: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8'}
    ];

    const handleNextVideo = (video, playIndex) => {
        if(playIndex === video.length - 1){
            setPlayIndex(0);
        }else{
            setPlayIndex(playIndex + 1);
        }
    }
    
    const onReady = React.useCallback(() => {
        if (!isReady) {
          const timeToStart = (7 * 60) + 12.6;
          playerRef.current.seekTo(timeToStart, "seconds");
          setIsReady(true);
        }
      }, [isReady]);
      
    const selectVideo = (index) => {
        setPlayIndex(index);
    }

    if(playList === null) return <p>Loading...</p>;

    return (
        <>
            <h2>Player Test</h2>
            <ReactPlayer
                ref={playerRef}
                url={playList[playIndex].url}
                playing
                controls
                muted
                progressInterval={1000}
                pip={true}
                onEnded={() => {handleNextVideo(playList, playIndex)}}
                onReady={onReady}
                width={'800px'}
                height={'500px'}
            />
        </>
    )
}

export default Video;