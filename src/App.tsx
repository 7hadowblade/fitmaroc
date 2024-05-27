import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DivOfdarkmode from './Component/DivOfdarkmode';
import Entersite from './Component/Entersite';
import Store from './Component/Store';
import About from './Component/About';
import Login from './Component/Login';
import Stepcounter from './Component/Stepcounter';
import MusicPlay from './Component/MusicPlayer';
import Settings from './Component/Settings';
import Agenda from './Component/Agenda';
import Home from './Component/Home';
import VideoPlayer from './Component/VideoPlayer';
import Lives from './Component/Lives';
import PaymentForm from './Component/PaymentForm';
import {EntryForm} from './Component/EntryForm';
import VideoPlayerabs from './Component/VideoPlayerabs';
import VideoPlayerleg from './Component/VideoPlayerLeg';
import VideoPlayerbox from './Component/VideoPlayerbox';
import VideoPlayerback from './Component/VideoPlayerback';
import VideoPlayeryoga from './Component/VideoPlayeryoga';
import VideoPlayercardio from './Component/VideoPlayercardio';
import VideoPlayerchest from './Component/VideoPlayerchest';
import VideoPlayersholder from './Component/VideoPlayersholder';

document.title = "FitMaroc";

function App() {
  return (
    <Router>

      <Routes>
          <Route path="/" element={<Entersite />} />
        <Route path="/PaymentForm "element={<PaymentForm /> }/>
           <Route path="/VideoPlayersholder" element={<VideoPlayersholder />} />
           <Route path="/VideoPlayerchest" element={<VideoPlayerchest />} />
         <Route path="/VideoPlayercardio" element={<VideoPlayercardio />} />
         <Route path="/VideoPlayer" element={<VideoPlayer />} />
          <Route path="/VideoPlayerbox" element={<VideoPlayerbox />} />
            <Route path="/VideoPlayerback" element={<VideoPlayerback />} />
              <Route path="/VideoPlayeryoga" element={<VideoPlayeryoga />} />
          <Route path="/VideoPlayerLeg" element={<VideoPlayerleg />} />
           <Route path="/VideoPlayerabs" element={<VideoPlayerabs />} />
        <Route path="/Entersite" element={<Entersite />} />
       
        <Route path="/Store" element={<Store />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
       <Route path="//CalorieCounter" element={<EntryForm />} />
        <Route path="/Stepcounter" element={<Stepcounter />} />
        <Route path="/MusicPlay" element={<MusicPlay />} />
         
        <Route path="/Classes" element={<Home />} />
        <Route path="/Lives" element={<Lives />} />
        <Route path="/Agenda" element={<Agenda schedule={[]}  />} /> {/* Pass the schedule as prop */}
        <Route       
          path="/Settings"
          element={
            <Settings
              toggleDarkMode={() => {
                // Implement toggleDarkMode logic here
              }}
            />
          }
        />
      </Routes>

      <DivOfdarkmode />
     
    </Router>
  );
}

export default App;
