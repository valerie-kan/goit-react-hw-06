import Contact from "../contact/Contact";
import css from './ContactList.module.css'

export const ContactList = ({ filteredList, deleteContact }) => {
    return (
        <ul className={css.contactList}>
            {filteredList.map((contact) => (
                <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    deleteContact={deleteContact} />)
            )}
        </ul> 
    )
 }

