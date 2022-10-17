import './NavBar.css'
import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <div>
            <Link className='links' to="/">View All Practice Plans</Link>
            &nbsp; | &nbsp;
            <Link className='links' to="/new">New Plan</Link>
            </div>
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp; <Link className='links' to={""} onClick={handleLogOut}>Logout</Link>
        </nav>
    )
}
