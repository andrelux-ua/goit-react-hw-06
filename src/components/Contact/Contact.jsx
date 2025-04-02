function Contact({ userContact: { id, name, number }, onDelete }) {
  return (
    <div>
      <div>
        <p>{name}</p>
        <a href={`tel:${number}`}>{number}</a>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;
