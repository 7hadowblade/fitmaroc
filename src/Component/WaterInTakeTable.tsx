// WaterIntakeTable.tsx

import React from 'react';

import './Water.css'
const WaterIntakeTable: React.FC = () => {

  return (
   
    <div className="water-intake-table-container">
      
      <h2 className='h2'>Recommended Water Intake</h2><h2 className='h2'> by Weight</h2>
      <table className="water-intake-table">
        <tbody>
          <tr>
            <th>Weight (kg)</th>
            <th>Weight (lbs)</th>
            <th>Water Intake (liters/day)</th>
          </tr>
          <tr>
            <td>50</td>
            <td>110</td>
            <td>Approximately 1.6L</td>
          </tr>
          <tr>
            <td>60</td>
            <td>132</td>
            <td>Roughly 1.9L</td>
          </tr>
          <tr>
            <td>70</td>
            <td>154</td>
            <td>Around 2.3L</td>
          </tr>
          <tr>
            <td>80</td>
            <td>176</td>
            <td>About 2.5L</td>
          </tr>
          <tr>
            <td>90</td>
            <td>198</td>
            <td>Approximately 2.8L</td>
          </tr>
          <tr>
            <td>100</td>
            <td>220</td>
            <td>Roughly 3L</td>
          </tr>
        </tbody>
      </table>
      
    </div>
    
  );
};

export default WaterIntakeTable;
