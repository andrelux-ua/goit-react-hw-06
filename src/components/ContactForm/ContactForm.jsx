import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be min 3 chars')
    .max(50, 'Maximum 50 characters!')
    .matches(/^[a-zA-ZА-Яа-яЇїІіЄєҐґ'’ -]+$/, 'Name cannot contain numbers!')
    .required('This field is required'),

  number: Yup.string()
    .matches(/^[+]?[\d]+$/, "Only numbers and '+' sign!")
    .min(3, 'Must be min 3 chars')
    .max(50, 'Maximum 50 characters!')
    .required('This field is required!'),
});

function ContactForm({ onAdd }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor="number">Number:</label>
          <Field type="tel" name="number" id="number" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
