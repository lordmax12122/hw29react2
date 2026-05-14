import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../redux/contactsSlice';

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <li>
      <div>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Видалити
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;