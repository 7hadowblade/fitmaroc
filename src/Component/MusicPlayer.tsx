import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the default styles
import '../music.css'; // Import custom styles
import Navbar from './Navtab';
import DarkMode from './DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = () => {
   const { darkMode } = DarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const audioList = [
    {
      name: 'Song 1',
      src: 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
    {
      name: 'Song 2',
      src: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    },
    {
      name: 'Song 3',
      src: 'https://example.com/song3.mp3',
    },
    // Add more songs as needed
  ];

  const filteredAudioList = audioList.filter(audio =>
    audio.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePlay = (index : any)  => {
    setCurrentIndex(index);
  };
  
  const playNextSong = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % audioList.length);
  };
  
  const playPrevSong = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + audioList.length) % audioList.length);
  };

  const handleDownload = () => {
    window.location.href = audioList[currentIndex]?.src || '';
  };

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  // Conditionally render playlist JSX
 const playlistSection = searchQuery && (

  
  <div key="playlist" className="playlist">
    <h3>Playlist</h3>
    {filteredAudioList.length > 0 ? (
      <ul>
        {filteredAudioList.map((audio, index) => (
          <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => handlePlay(index)}>
            {audio.name}
          </li>
        ))}
      </ul>
    ) : (
      <p>No results found</p>
    )}
  </div>
);


  return (
      <div className={darkMode ? 'dark-mode' : ''}>
    <div>      <Navbar/>
        
        <div className='playlist'>
          <input
          type="text"
          placeholder="Search songs..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
     <button className="toggle-playlist" onClick={togglePlaylist}>
  {showPlaylist ? 'X' : <FontAwesomeIcon icon={faHeadphones} />}
</button>

</div> 
      {playlistSection}
    <div className="music-player">
      <div className="search-bar">
  
      </div>
      <AudioPlayer
        autoPlay
        src={audioList[currentIndex]?.src || ''}
        onPlay={() => console.log('Playing:', audioList[currentIndex]?.name)}
        customVolumeControls={[
          <div className="audio-controls" key="audio-controls">
            <button onClick={playPrevSong}>Prev</button>
            <button onClick={playNextSong}>Next</button>
            <button onClick={handleDownload}>Download</button>
          </div>
        ]}
      />
     </div>
    </div>
    </div>
  );
};

export default MusicPlayer;
