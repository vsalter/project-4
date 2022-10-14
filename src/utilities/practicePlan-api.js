import sendRequest from "./send-request";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/practicePlan';

export async function newPlan(planData) {
  return sendRequest(BASE_URL, 'POST', planData);
} 

export function showPlans() {
  return sendRequest(BASE_URL);
}

export function getPlan(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updatePlan(id, updatedData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', updatedData);
}

export function deletePlan(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}