import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from 'react-icons/tb'
import PlayBtn from './PlayBtn'
import './PlayerNextPlayPrevBtn.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PlayerNextPlayPrevBtn = () => {
    const { id } = useParams(); // récupère l'id de l'album à partir de l'URL
    const [tracks, setTracks] = useState([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const tracksData = data.items.map((item) => ({
                    name: item.name,
                    url: item.preview_url,
                    duration: item.duration_ms,
                }));
                setTracks(tracksData);
            });
    }, [id]);

    useEffect(() => {
        const audioPlayer = document.getElementById('player');
        if (tracks.length > 0) {
            audioPlayer.src = tracks[currentTrackIndex].url;
        }
        setIsPlaying(false);
    }, [tracks, currentTrackIndex]);

    const handlePlay = () => {
        const audioPlayer = document.getElementById('player');
        if (!isPlaying) {
            audioPlayer.play();
            setIsPlaying(true);
        } else {
            audioPlayer.pause();
            setIsPlaying(false);
        }
    };

    const handleNext = () => {
        if (currentTrackIndex === tracks.length - 1) {
            setCurrentTrackIndex(0);
        } else {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentTrackIndex === 0) {
            setCurrentTrackIndex(tracks.length - 1);
        } else {
            setCurrentTrackIndex(currentTrackIndex - 1);
        }
    };

    const handleEnded = () => {
        if (currentTrackIndex === tracks.length - 1) {
            setCurrentTrackIndex(0);
        } else {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }
    };

    return (
        <div className='PlayerNextPlayPrevBtn'>

            <audio id='player'  onEnded={handleEnded}>
                <source src=/*{tracks[currentTrackIndex]?.url}*/  "https://p.scdn.co/mp3-preview/788a028fa3a33141c817b1064e3159006edeaa8d?cid=3123a573de044583b8cdbb3f1de35a70"
                ></source>
            </audio>

            <div className='play-btn-prev'>
                <TbPlayerTrackPrevFilled style={{ height: '3.5em', width: '3.5em' }} onClick={handlePrev} />
            </div>

            <PlayBtn handlePlay={handlePlay} isPlaying={isPlaying} />          

            <div className='play-btn-prev'>
                <TbPlayerTrackNextFilled style={{ height: '3.5em', width: '3.5em', }} onClick={handleNext} />
            </div>


        </div>
    )
}

export default PlayerNextPlayPrevBtn