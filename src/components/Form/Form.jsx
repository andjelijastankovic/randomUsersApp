import {MdPersonSearch} from "react-icons/md";
import '../../styles/Form.css';
export const Form = ({male, female, searchValue, setSearchValue}) => {

    return (
        <div>
            <form action="">
                <div className="formDiv">
                    <span className="searchIcon"><MdPersonSearch /></span>
                    <input type="search" placeholder="Search users" 
                    value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
                    />
                </div>
            </form>
            <p className="genders">Male: {male} Female: {female} </p>
        </div>
    );
}