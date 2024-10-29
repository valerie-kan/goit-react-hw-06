import { useEffect, useState } from 'react'
import './App.css'
import contactsData from '../contscts.json'
import { nanoid } from 'nanoid'

import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/serchBox/SearchBox'
import { ContactList } from './components/contactList/ContactList'



function App() {
  const [contacts, setContacts] = useState(() => {
    const contsFromLS = localStorage.getItem('contactsInfo');
    const parsedConts = JSON.parse(contsFromLS) ?? contactsData;
    
    return parsedConts;
  });
  
  const [filteredInfo, setFilteredInfo] = useState('');

  useEffect(() => {
    const stringifiedConts = JSON.stringify(contacts);
    localStorage.setItem('contactsInfo', stringifiedConts)
  }, [contacts]);

  const filteredList = contacts.filter((contact) => contact.name.toLowerCase().includes(filteredInfo.toLowerCase().trim()));

  const addNewContact = (newCont) => {
    const newContInfo = {
      ...newCont, 
      id: nanoid(),
    }
    
    setContacts((prevInfo) => [...prevInfo, newContInfo]);
  }

  const deleteContact = (delatedId) => {
    const finalContList = contacts.filter((contact) => contact.id !== delatedId);
    setContacts(finalContList);
  }

  return (
    <div className='mainContainer'>
      <h1 className='mainTitle'>Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox
        filteredInfo={filteredInfo}
        setFilteredInfo={setFilteredInfo} />
      <ContactList
        filteredList={filteredList}
        deleteContact={deleteContact} />
    </div>
  )
}

export default App
