import React, { useState } from 'react';
import { MetricForm } from './MetricForm';
import { ImperialForm } from './ImperialForm';
import { ActivityLevel } from './ActivityLevel';
import { Result } from './Result';
import Navbar from './Navtab';
import Footer from './Footer';
import useDarkMode from './DarkMode'; // Updated import

export const EntryForm = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [activity, setActivity] = useState('');
    const [height, setHeight] = useState('');
    const [measurement, setMeasurement] = useState('');
    const [measurementSelected, setMeasurementSelected] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [resultForm, setResultForm] = useState('');

    const { darkMode } = useDarkMode();

    const handleMeasurementChange = (event) => {
        setMeasurement(event.target.value);
        setMeasurementSelected(true);
    };

    const validEntry = () => {
        // Check that all input fields are valid before getting result
        let fields = [gender, age, weight, height, activity];
        // check that any of the fields aren't empty 
        for (let field of fields) {
            if (field.length === 0) {
                return false;
            }
        }
        // check each field is in a valid range
        if (age < 0 || age > 120) {
            return false;
        }
        if (weight < 0) {
            return false;
        }
        if (height < 0) {
            return false;
        }
        return true;
    };

    const getCalories = () => {
        if (validEntry()) {
            setShowResult(true);
            setResultForm(<Result calories={calculateCalories()} measurementType={measurement} />);
        } else {
            alert("Please make sure that you have entered valid information in every field.");
        }
    };

    // Calculate BMR from form data using Harris-Benedict Equation
    const calculateCalories = () => {
        let bmr = 0;
        // use equation to get bmr (calories burned at rest)
        if (gender === 'male') {
            bmr = 66.473 + (13.75116 * weight) + (5.033 * height) - (6.755 * age);
        } else {
            bmr = 655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age);
        }
        // adjust bmr according to activity level
        switch (activity) {
            case 'none':
                bmr = bmr * 1.2;
                break;
            case 'light':
                bmr = bmr * 1.375;
                break;
            case 'moderate':
                bmr = bmr * 1.55;
                break;
            case 'heavy':
                bmr = bmr * 1.725;
                break;
            case 'v-heavy':
                bmr = bmr * 1.9;
                break;
        }
        return Math.round(bmr);
    };

    return (
        <div className={darkMode ? 'dark-mode' : ''}>
            <div>
                <Navbar />
                <h1 style={{ alignContent: 'center', textAlign: 'center', color: 'orange' }} > <div className='heo'> Select unit of measurement:</div></h1>
                <div className="entry-form">
                    <form>
                        <div className="measurement-choice">
                            <input type="radio" id="metric" value="metric" checked={measurement === "metric"} onChange={handleMeasurementChange} />
                            <label htmlFor="metric">Metric (kg/cm)</label>
                            <input type="radio" id="imperial" value="imperial" checked={measurement === "imperial"} onChange={handleMeasurementChange} />
                            <label htmlFor="imperial">Imperial (lbs/feet+inches)</label>
                        </div>

                        <div className='gender-choice'>
                            <label htmlFor='gender'>Gender</label>
                            <select name='gender' id='gender' className="browser-default custom-select" onChange={(e) => setGender(e.target.value)}>
                                <option value="" disabled selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        {measurement === 'metric' && <MetricForm weightChange={setWeight} ageChange={setAge} heightChange={setHeight} />}
                        {measurement === 'imperial' && <ImperialForm weightChange={setWeight} ageChange={setAge} heightChange={setHeight} />}
                        {measurementSelected && <ActivityLevel onChange={setActivity} />}
                        {measurementSelected && <button type="button" className="btn btn-primary" id="calculate-btn" onClick={getCalories}>Calculate my calories</button>}
                    </form>
                </div>
                <div>
                    {showResult && resultForm}
                </div>
                <Footer />
            </div>
        </div>
    );
};
