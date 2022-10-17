import { useState, useEffect } from "react";
import * as practicePlanAPI from "../../utilities/practicePlan-api";
import {Link} from 'react-router-dom';

export default function PlanViews({user}) {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        async function getPlans() {
            const plans = await practicePlanAPI.showPlans();
            setPlans(plans);
        }
        getPlans();
    }, [])

    async function handleDelete(id) {
        const deletePlan = await practicePlanAPI.deletePlan(id);
        console.log(`delete: ${deletePlan}`)
        // navigate('/plans')
        window.location.reload();
      };

    async function getAPlan(id){
        await practicePlanAPI.getPlan(id);
    }

    return (
        <>
        { plans.map((p, idx) => 
        <div>
            <p>{p.name} | {p.date} | {p.startTime} | <Link to={`details/${p._id}`}><button onClick={() => getAPlan(p._id)}>details </button></Link> | <button onClick={()=>handleDelete(p._id)}>x</button></p> 
        </div>
        
    )}
    </>)
}