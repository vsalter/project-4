import './PlanViews.css'
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
    <h1>All of {user.name}'s Practice Plans </h1>
    <div className='plans'>
        { plans.map((p, idx) => 
        <div className="cards">
            <p>{p.name} | {p.date} | {p.startTime} | <Link to={`details/${p._id}`}><button className='buttons' onClick={() => getAPlan(p._id)}>details </button></Link> | <button className='buttons' onClick={()=>handleDelete(p._id)}>x</button></p> 
        </div>
        
    )}
    </div>
    </>)
}