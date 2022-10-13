import NewPlanPage from "../../components/NewPlanPage/NewPlanPage";
import { useState, useEffect } from "react";
import * as practicePlanAPI from "../../utilities/practicePlan-api";

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
            <p>{p.name}</p>
        </div>
        
    )}
    </>)
}