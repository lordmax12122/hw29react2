import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <div>
        <header>
          <h1>Книга контактів</h1>
        </header>

        <div>
          <section>
            <h2>Додати контакт</h2>
            <ContactForm />
          </section>

          <section>
            <h2>
              Контакти
            </h2>
            <ContactList />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;