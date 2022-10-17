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

    
        return (
          <div>
            <h1>{plan[0].name}</h1>
            <h1>{plan[0].date}</h1>
            <h1>{plan[0].startTime}</h1>
            <h1>{plan[0].endTime}</h1>
            <Link to={`/edit/${plan[0]._id}`}><button className="button" onClick={() => getAPlan(plan[0]._id)}>edit </button></Link>
          </div>
        )
}