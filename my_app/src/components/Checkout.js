import React from 'react';

import { Container } from 'react-bootstrap';

import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <>
      <label className="checkbox">
        <br />
        <input type="checkbox" {...field} {...props} style={{ opacity: '1' }} />
        {children}
      </label>

      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default function Checkout() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'must be minimum 3 characters')
          .max(15, 'must be maximum 15 characters')
          .required('name is required'),

        email: Yup.string().email(3, 'Invalid email format').required('email is required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 2000);
      }}
    >
      {() => (
        <Container>
          <Form>
            <h1>Sign up</h1>
            <CustomTextInput label="name" name="name" placeholder="name" />
            <CustomTextInput label="email" type="email" name="email" placeholder="email" />
            <CustomCheckbox name="acceptedTerms">I accept terms and conditions</CustomCheckbox>
            <button type="submit">Submit</button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
