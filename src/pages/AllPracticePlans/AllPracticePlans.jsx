import {checkToken} from "../../utilities/users-service";
import * as planService from '../../utilities/practicePlan-service';


export default function AllPracticePlans(plan) {
    async function handleCheckToken() {
        // calling checkToken from service layer
        const expDate = await checkToken();
        console.log(`expDate is ${expDate}`);
    }

    return (
        <>
            <h1>Your Practice Plans</h1>
            <span>{plan.name}</span>
            <h4>name: {plan.name}</h4>
        </>
    );
}