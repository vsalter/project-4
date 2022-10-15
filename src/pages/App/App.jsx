import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewPlanPage from '../../components/NewPlanPage/NewPlanPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';
import PlanViews from '../PlanViews/PlanViews';
import PlanDetailPage from '../PlanDetailPage/PlanDetailPage';
import EditPlan from '../EditPlan/EditPlan';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());


    return (
        < main className="App">
            {user ?
                <>

                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/plans/new" element={<NewPlanPage/>}/>
                        <Route path="/plans" element={<PlanViews/>}/>
                        <Route path="/plans/details/:id" element={<PlanDetailPage/>}/>
                        {/* <Route path="/plans/edit/:id" element={<EditPlan/>}/> */}
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser} user={user}/>}

        </main>
    );
}

export default App;