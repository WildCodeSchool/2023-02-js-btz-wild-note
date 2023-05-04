import { useParams } from 'react-router-dom'
import './Playlist.css'

const Playlist = () => {
    const {playlistName} = useParams();

    return(
        <div className='playlist-page'>
            <h1>{playlistName}</h1>
        </div>
    )
}

export default Playlist