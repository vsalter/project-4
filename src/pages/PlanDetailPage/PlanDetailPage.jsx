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
            console.log('thskdh', p1);
            console.log('thskdh', p2);
            // window.location.reload();
        }
        getPlans();
    }, [])
    console.log('thskdh', p1);
    //console.log(plans);
    return (
        <>
            
            <h1>{p1[0].name}</h1> 
            <h3>Date: {p1[0].date}</h3>
            <h3>Start Time: {p1[0].startTime}</h3>
            <h3>End Time: {p1[0].endTime}</h3>
            
        
    
    </>)
}