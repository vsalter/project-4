import { useState, useEffect } from "react";
import * as practicePlanAPI from "../../utilities/practicePlan-api";
import { useParams } from "react-router-dom";


export default function PlanDetailPage() {
    let { id } = useParams();
    console.log(id);
    const [plans, setPlans] = useState([]);
    const [p1, setP1] = useState([]);
    useEffect(() => {
        async function getPlans() {
            const plans = await practicePlanAPI.showPlans();
            setPlans(plans);
            const p2 = plans.filter(p => p._id === id);
            setP1(p2);
        }
        getPlans();
    }, [])
    console.log(p1);
    // console.log(plans);
    return (
        <>
        Plan 
       {p1[0].name}
        
    
    </>)
}