import React, { useEffect } from 'react';
import Navbar from './Navtab';
import Footer2 from './Footer2';
import WaterIntakeTable from './WaterInTakeTable';
import DarkMode from './DarkMode';
import Footer from './Footer';

const Stepcounter: React.FC = () => {
  const { darkMode } = DarkMode();
  useEffect(() => {
    let stepCount = 0;
    let isTracking = false;
    let caloriesBurned = 0;

    const caloriesPerStep = 0.05; 
    const averageWeight = 70; 

    const startTracking = () => {
      if (!isTracking && 'DeviceOrientationEvent' in window && 'geolocation' in navigator) {
        isTracking = true;
        let prevCoords: GeolocationCoordinates | null = null;

        window.addEventListener('deviceorientation', handleOrientation);
        navigator.geolocation.watchPosition((position) => {
          if (prevCoords) {
            const distance = getDistance(prevCoords.latitude, prevCoords.longitude, position.coords.latitude, position.coords.longitude);
            if (distance > 0.1) { 
              stepCount++;
              caloriesBurned += caloriesPerStep;
              document.getElementById("stepCount")!.innerText = stepCount.toString();
              document.getElementById("caloriesBurned")!.innerText = caloriesBurned.toFixed(2);
            }
          }
          prevCoords = position.coords;
        });
      }
    }

    const stopTracking = () => {
      isTracking = false;
      window.removeEventListener('deviceorientation', handleOrientation);
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      
    }

    const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
      const R = 6371; 
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; 
      return d;
    }

   
    startTracking();

    
    return () => {
      stopTracking();
    };
  }, []); 

  return (
  <div className={darkMode ? 'dark-mode' : ''}>
    <><Navbar/>
      <b><div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}><h1 id="h1">FitMaroc</h1></div></b>

      <div className="containerre">
        <div className="tracker">
          <div style={{ justifyContent: 'center', textAlign: 'center' }}>
            <p>Number of Steps: <span id="stepCount">0</span></p>
            <p>Calories Burned: <span id="caloriesBurned">0</span> kcal</p><br />
          </div>
        </div>
      </div>
      <WaterIntakeTable />
         <Footer/>
    </></div>
  );
};

export default Stepcounter;
