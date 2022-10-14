import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewPlanPage from '../../components/NewPlanPage/NewPlanPage';
import AllPracticePlans from '../AllPracticePlans/AllPracticePlans';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';
import PlanViews from '../PlanViews/PlanViews';

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
                        <Route path="/details/:id" element={<AllPracticePlans/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser} user={user}/>}

        </main>
    );
}

export default App;