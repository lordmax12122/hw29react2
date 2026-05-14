import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../redux/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    if (!trimmedName || !trimmedNumber) return;

    const isDuplicate = contacts.some(
      c => c.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${trimmedName} вже є у контактах.`);
      return;
    }

    dispatch(addContact(trimmedName, trimmedNumber));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name">Ім'я</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Іван Петренко"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-number">Номер телефону</label>
        <input
          id="contact-number"
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="+380 99 123 45 67"
          required
        />
      </div>
      <button type="submit">Додати контакт</button>
    </form>
  );
}

export default ContactForm;