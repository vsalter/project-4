import NewPlanPage from "../../components/NewPlanPage/NewPlanPage";
import { useState, useEffect } from "react";
import * as practicePlanAPI from "../../utilities/practicePlan-api";
import {Link} from 'react-router-dom';

export default function PlanViews() {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        async function getPlans() {
            const plans = await practicePlanAPI.showPlans();
            setPlans(plans);
        }
        getPlans();
    }, [])

    return (
        <>
        {plans.map((p, idx) => 
        <div>
            <p>{p.name} | {p.date} | {p.startTime} | <Link to="/details">Details</Link></p>

        </div>
        
    )}
    </>)
}