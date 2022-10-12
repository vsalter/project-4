import React, { useState } from 'react';


export default function NewPlanPage() {
  const [plan, setPlan] = useState({
    name: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  function handleChange(evt) {
    setPlan({...plan, [evt.target.name]: evt.target.value});
  };
   
  return (
    <div>
      <h1>Create New Practice Plan</h1>
        <div className="form-container">
          <form>
            <label>Practice Name</label>
            <input type="text" name="name" value={plan.name} required />
            <label>Practice Date</label>
            <input type="date" name="date" value={plan.date} required />
            <label>Start Time</label>
            <input type="time" name="startTime" value={plan.startTime} required />
            <label>End Time</label>
            <input type="time" name="endTime" value={plan.endTime} required />
            <button type="submit">Create Practice Plan</button>
          </form>
        </div>
        {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
    </div>
  );
}


