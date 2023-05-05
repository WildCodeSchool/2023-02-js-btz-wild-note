// import React, { useEffect, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/logo-sanstexte.png';
// import { IoIosArrowBack } from 'react-icons/io';
// import Navbar from '../components/navbar/Navbar'
// import axios from 'axios';
// import './GenrePage.css';

// const GenrePage = () => {


//     const [playlists, setPlaylists] = useState([])

//     const navigate = useNavigate()
//     const {ids} = useParams();
  
//     useEffect(() => {
//       axios
//       .get(`https://api.spotify.com/v1/albums?ids?q=${ids}&market=FR`, {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
//         },
//       })
//       .then((res) => {
//         console.log(res.data.playlists)
//         return setPlaylists(res.data.playlists);
//       })
//     }, []);
  
//     const previousPage = () => {
//       navigate(-1);
//     }
  
//     return (
//       <div className='search-results'>
//         <div className='results-page-header'>
//           <IoIosArrowBack className='back-arrow' onClick={previousPage}/>
//           <img className='logo-back-home' src={Logo}/>
//         </div>
//         { albums.map((album) => (
//           <div key={`${album.id}-genre`} className={'album-genre-container'}>
//               <h2 style={{textTransform: 'uppercase'}}>{album.name}</h2>
//           </div>
//         ))
//         }
//         <Navbar />
//       </div>
//     )
// }

// export default GenrePage;