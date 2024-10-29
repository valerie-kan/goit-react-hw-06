import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({ id, name, number, deleteContact }) => {

    return (
        <li className={css.contactItem}>
            <div>
                <p><IoPerson /> {name}</p>
                <p><FaPhone /> {number}</p>
            </div>
            <button className={css.btn} type="button" onClick={() => deleteContact(id)}>Delete</button>
        </li>
    )
}

export default Contact