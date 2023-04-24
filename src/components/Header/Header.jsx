import '../../styles/Header.css';
import { MdRefresh } from "react-icons/md";
import { FaThList } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import {Link } from "react-router-dom";

export const Header = ({listView, setListView, reload}) => {
    
    return (
        <header>
            <h1>Random Users</h1>
            <div className="aboutAndIcons">
                <span> <Link to='/about' className='aboutLink'>About</Link></span> 
                <span className="icon" onClick={reload}><MdRefresh /></span> 
                <span className="icon" onClick={() => setListView(!listView)}>{ listView ? <FaThList/> : <TfiLayoutGrid3Alt/> }</span> 
            </div>
        </header>
    );
}