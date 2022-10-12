import { useState } from 'react';


export default function NewPlanPage() {
  return (
    <div>
      <h1>Create New Practice Plan</h1>
      <div>
        <div className="form-container">
          <form>
            <label>Practice Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Practice Date</label>
            <input type="date" name="date" value={this.state.confirm} onChange={this.handleChange} required />
            <label>Start Time</label>
            <input type="timestamp" name="startTime" value={this.state.email} onChange={this.handleChange} required />
            <label>End Time</label>
            <input type="timestamp" name="endTime" value={this.state.password} onChange={this.handleChange} required />
            <button type="submit">Create Practice Plan</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    </div>
  );
}


