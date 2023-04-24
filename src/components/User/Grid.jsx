import { hideMail } from "../../utilities/hideEmail";
import { formatDate } from "../../utilities/formatDate";
import { MdOutlineEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";

export const Grid = ({gender, name, surname, img, email, date }) => {
    return (
        <div className={`card ${gender === 'female' ? 'female' : ''}`}>
            <img className="square" src={img} alt={img} />
            <div className="details">
                <p className="nameOver">{name} {surname}</p>
                <p> <MdOutlineEmail /> Email: {hideMail(email)}</p>
                <p> <FaBirthdayCake /> Date: {formatDate(date)}</p>
            </div>
        </div>
    );
}