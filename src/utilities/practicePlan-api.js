import sendRequest from "./send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/practicePlan';

export async function newPlan(planData) {
  return sendRequest(BASE_URL, 'POST', planData);
} 
