import '../../styles/About.css';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div>
            <header>
                <h1><Link to='/' className='link'>Random Users</Link></h1>
            </header>

            <div className='desc'>
                <div className="about">
                    <h2>About</h2>
                    <p>
                        During the <b><i><a href="https://www.bgit.rs/" target="_blank" rel="noreferrer">BIT Frontend course</a></i></b>, I created simple React app <b>Random Users</b>, 
                        which lists 15 random users along with their names, email addresses, 
                        and dates of birth fetched from <a href="https://randomapi.com/" target="_blank" rel="noreferrer">Random API</a>. You can refresh the list to get new random users, switch the display 
                        to grid if you'd prefer, and filter users by first or last name. You can view statistics depending on user gender under the search area.
                    </p>
                </div>
            </div>
        </div>
    );
}