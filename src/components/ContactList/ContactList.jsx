import Contact from '../Contact/Contact';

function ContactList({ userContacts, onDelete }) {
  return (
    <div>
      <ul>
        {userContacts.map(userContact => (
          <li key={userContact.id}>
            <Contact userContact={userContact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
