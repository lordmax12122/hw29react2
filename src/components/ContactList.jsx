import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice';
import ContactItem from './ContactItem';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length === 0) {
    return <p>Контактів не знайдено</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;