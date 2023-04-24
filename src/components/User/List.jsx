import { hideMail } from "../../utilities/hideEmail";
import { formatDate } from "../../utilities/formatDate";
import { MdOutlineEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";


export const List = ({ gender, name, surname, img, email, date }) => {
    return (
        <div className={`list ${gender === 'female' ? 'female' : ''}`}>
            <img className="rounded" src={img} alt={img} />
            <div className="details">
                <p className="name">{name} {surname}</p>
                <p> <MdOutlineEmail /> Email: {hideMail(email)}</p>
                <p> <FaBirthdayCake /> Date: {formatDate(date)}</p>
            </div>
        </div>
    );
}