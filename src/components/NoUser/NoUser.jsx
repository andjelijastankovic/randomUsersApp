import '../../styles/NoUser.css';
import {TbMoodSadDizzy} from 'react-icons/tb';
export const NoUser = () => {
    return (
        <div className='errorDiv'>
            <p className='errorIcon'><TbMoodSadDizzy /></p> 
            <p className='errorPar'>We couldn't find any people matching your search</p>
        </div>
    );
}