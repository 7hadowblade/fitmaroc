/* eslint-disable jsx-a11y/iframe-has-title */
// MusicPlayer.tsx

import React from 'react';
import './MusicPlayer.css';
import Navbar from './Navtab';
import Footer from './Footer';
import DarkMode from './DarkMode';
import ControlledCarouselpodcast from './ControlledCarouselpodcast';

const MusicPlayer: React.FC = () => {
    const { darkMode } = DarkMode();
    return (
        <div className={darkMode ? 'dark-mode' : ''}>
            <div>
                <h1 className='h1'>Music</h1>
                <h1 className='h1'>Select your channel</h1>
                <Navbar />
                <div className="radio-player">
                    <iframe style={{backgroundColor:'gray'}}
                        className={darkMode ? 'dark-iframe' : ''}
                        src="https://www.partyviberadio.com/player-https/embed-auto/reggae.html"
                        name="embed-light"
                        width={800}
                        height={100}
                        frameBorder={0}
                        scrolling="no"
                    ></iframe>
                </div>
                <h1 className='h11'>Podcasts</h1>
                <div className='con'>
                <ControlledCarouselpodcast/>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MusicPlayer;
