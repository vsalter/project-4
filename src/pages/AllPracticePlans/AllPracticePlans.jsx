import {checkToken} from "../../utilities/users-service";

export default function AllPracticePlans() {
    async function handleCheckToken() {
        // calling checkToken from service layer
        const expDate = await checkToken();
        console.log(`expDate is ${expDate}`);
    }

    return (
        <>
            <h1>Your Practice Plans</h1>
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
    );
}