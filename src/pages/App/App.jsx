import './App.css';
import {useState, useEffect } from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewPlanPage from '../../components/NewPlanPage/NewPlanPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';
import PlanViews from '../PlanViews/PlanViews';
import PlanDetailPage from '../PlanDetailPage/PlanDetailPage';
import * as practicePlanAPI from '../../utilities/practicePlan-api';
import EditPlan from '../EditPlan/EditPlan';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());
    const [plans, setPlans] = useState([]);
     
    useEffect(function() {
        async function getAllPlans() {
        const plans = await practicePlanAPI.showPlans();
        setPlans(plans);
        }
        getAllPlans();
    }, [])

    return (
        < main className="App">
            {user ?
                <>

                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/new" element={<NewPlanPage/>}/>
                        <Route path="/" element={<PlanViews user={user} plans={plans}/>}/>

                        <Route path="/details/:id" element={<PlanDetailPage plans={plans}/>}/>
                        <Route path="/edit/:id" element={<EditPlan plans={plans}/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser} user={user}/>}

        </main>
    );
}

export default App;