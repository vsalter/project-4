import React, { useState } from 'react';
import * as planService from '../../utilities/practicePlan-service';
import * as planAPI from '../../utilities/practicePlan-api';


export default function NewPlanPage({newPlan}) {
  const [plan, setPlan] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setPlan({...plan, [evt.target.name]: evt.target.value});
    setError('');
  };

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try{
      const practicePlan = await planAPI.newPlan(plan);
      setPlan(practicePlan);
      alert('success');
      window.location.reload();
    } catch {
      setError('Unsuccessful')
    }
  }
   
  return (
    <div>
      <h1>Create New Practice Plan</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>Practice Name</label>
            <input type="text" name="name" value={plan.name} onChange={handleChange} required />
            <label>Practice Date</label>
            <input type="date" name="date" value={plan.date} onChange={handleChange} required />
            <label>Start Time</label>
            <input type="datetime-local" name="startTime" value={plan.startTime} onChange={handleChange} required />
            <label>End Time</label>
            <input type="datetime-local" name="endTime" value={plan.endTime} onChange={handleChange} required />
            <button type="submit">Create Practice Plan</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}


