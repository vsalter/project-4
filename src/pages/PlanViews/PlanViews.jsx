import { useState, useEffect } from "react";
import * as practicePlanAPI from "../../utilities/practicePlan-api";
import {Link} from 'react-router-dom';

export default function PlanViews({user}) {
    const [plans, setPlans] = useState([]);
    const [state, setState] = useState({complete:false})
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

      async function handleChange (e, id, check){
        // setGiftList(completedGift)
        // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        // setState({
        //   ...state,
        //   [e.target.name]: value,
        // })
        console.log(check)
        check ? setState(false) : setState(true)
        // setState(()=>{state.complete ? false : true})
        // setState(!state.complete)
        const completedPractice = await practicePlanAPI.completePractice(id, state.complete);
        // console.log(`value: ${value}`)
        
      }  

    return (
        <>
        {plans.map((p, idx) => 
        <div>
            <p>{p.name} | {p.date} | {p.startTime} | <Link to={`details/${p._id}`}>Details</Link> </p> 
            <button onClick={()=>handleDelete(p._id)}>x</button>
            <label>Complete</label>
        <input type="checkbox" 
                onChange={(e) => handleChange(e, p._id, p.complete)}
                //if statement if user is this then do this
                // onChange={handleChange()}
                // change the 
                checked={state.complete}
                name="complete"
                />
        </div>
        
    )}
    </>)
}