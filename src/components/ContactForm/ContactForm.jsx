import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

const initialValues = { name: '', number: '' };

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field className={css.input} type="text" name="name" id="name" />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field className={css.input} type="text" name="number" id="number" />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
