// WeekPlanner.tsx
import './Planing.css'
import React from 'react';

interface Props {
  handleAddTraining: (dayIndex: number, training: string, duration: number) => void;
}

const WeekPlanner: React.FC<Props> = ({ handleAddTraining }) => {
  return (
    <div className="week-planner"> {/* Add className */}
      <h2>Weekly Training Planner</h2>
      <div>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
          <div key={index}>
            <h3>{day}</h3>
            <button onClick={() => handleAddTraining(index, 'Abs', 60)}>Abs</button>
            <button onClick={() => handleAddTraining(index, 'Chest', 60)}>Chest</button>
            <button onClick={() => handleAddTraining(index, 'Back', 60)}>Back</button>
            <button onClick={() => handleAddTraining(index, 'Lower Body', 60)}>Lower Body</button>
            <button onClick={() => handleAddTraining(index, 'Yoga', 60)}>Yoga</button>
            <button onClick={() => handleAddTraining(index, 'Arms', 60)}>Arms</button>
            <button onClick={() => handleAddTraining(index, 'Sholders', 60)}>Sholders</button>
            
          </div>
        ))}
          <h2 className="mt-4">Weekly Training Agenda</h2>
      </div>
      
    </div>
  );
};

export default WeekPlanner;
