import { useState, useEffect } from "react";
import * as practicePlanAPI from "../../utilities/practicePlan-api";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


export default function PlanDetailPage({plans}) {
    const params = useParams();
    console.log('id',params.id); 
  
    const plan = plans.filter(p => p._id === params.id)
    console.log('plan', plan);

    async function getAPlan(id){
        await practicePlanAPI.getPlan(id);
    }

    // let { id } = useParams();
    // console.log(id);
    // const [plans, setPlans] = useState([]);
    // const [p1, setP1] = useState([]);
    // useEffect(() => {
    //     async function getPlans() {
    //         const plans = await practicePlanAPI.showPlans();
    //         setPlans(plans);
    //         const p2 = await plans.filter(p => p._id === id);
    //         setP1(p2);
    //         console.log('thskdh', p1);
    //         console.log('thskdh', p2);
    //         // window.location.reload();
    //     }
    //     getPlans();
    // }, [])
    // console.log('thskdh', p1);
    // //console.log(plans);
    // return (
    //     <>
            
    
    //         <h1>{p1[0].name}</h1> 
    //         <h3>Date: {p1[0].date}</h3>
    //         <h3>Start Time: {p1[0].startTime}</h3>
    //         <h3>End Time: {p1[0].endTime}</h3>
        
    
    // </>)

    
        return (
          <div>
            <h1>{plan[0]._id}</h1>
            <h1>{plan[0].name}</h1>
            <h1>{plan[0].date}</h1>
            <Link to={`/edit/${plan[0]._id}`}><button onClick={() => getAPlan(plan[0]._id)}>edit </button></Link>
          </div>
        )
}