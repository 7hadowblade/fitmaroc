import React, { useState, useEffect } from 'react';
import WeekPlanner from './WeekPlanner';
import { Button, Table } from 'react-bootstrap'; 
import './Table.css'
import Navtab from './Navtab';
import Footer from './Footer';
import DarkMode from './DarkMode';

interface Props {
  schedule: string[][];
}

const Agenda: React.FC<Props> = ({ schedule }) => {
  const [agendaSchedule, setAgendaSchedule] = useState<string[][]>([]);
  const [timers, setTimers] = useState<{ [key: string]: number | NodeJS.Timer }>({});
  const { darkMode } = DarkMode();
  useEffect(() => {
    const savedSchedule = JSON.parse(localStorage.getItem('schedule') || '[]');
    setAgendaSchedule(savedSchedule.length ? savedSchedule : schedule);
    const savedTimers = JSON.parse(localStorage.getItem('timers') || '{}');
    setTimers(savedTimers);
  }, [schedule]);

  const handleAddTraining = (dayIndex: number, training: string, duration: number) => {
    const newSchedule = [...agendaSchedule];
    newSchedule[dayIndex].push(training);
    setAgendaSchedule(newSchedule);
    localStorage.setItem('schedule', JSON.stringify(newSchedule));

    // Adjust the duration as needed, for example, converting minutes to milliseconds
    const durationInMilliseconds = duration * 60 * 1000;

    // Start the timer with the specified duration
    const timerKey = `${dayIndex}-${newSchedule[dayIndex].length - 1}`;
    setTimers(prevTimers => ({
      ...prevTimers,
      [timerKey]: setInterval(() => {
        clearInterval(prevTimers[timerKey] as NodeJS.Timer);
        delete prevTimers[timerKey];
        setTimers(prevTimers);
        // You can add any additional logic here when the timer finishes
      }, durationInMilliseconds)
    }));
  };

  const handleDeleteTraining = (dayIndex: number, trainingIndex: number) => {
    const newSchedule = [...agendaSchedule];
    newSchedule[dayIndex].splice(trainingIndex, 1);
    setAgendaSchedule(newSchedule);
    localStorage.setItem('schedule', JSON.stringify(newSchedule));
  };

  return (<div className={darkMode ? 'dark-mode' : ''}><div>   <Navtab/>
    <div className="container">
      
      <WeekPlanner handleAddTraining={handleAddTraining} />
      
    <Table className="table table-hover"> 
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Training</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {agendaSchedule.map((day, dayIndex) => (
            day.map((training, trainingIndex) => (
              <tr key={`${dayIndex}-${trainingIndex}`}>
           
                <td>Day {dayIndex + 1}</td>
                <td>{training}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteTraining(dayIndex, trainingIndex)}>Delete</Button>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>

    </div>
       <Footer/>
    </div>
    </div>
  );
};

export default Agenda;
