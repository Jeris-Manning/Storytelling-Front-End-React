import React from 'react';
import { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// import styled from 'styled-components';

function LoginForm({ errors, touched }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Username' />
      </div>
      <div>
        <Field type='password' name='password' placeholder='Password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button>Log In</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(values);

    axios
      .post(
        'https://storytelling-back-end.herokuapp.com/api/auth/login',
        values
        
      )
      .then((res) => {
        console.log("hello");
        localStorage.setItem('token', res.data.token);
        resetForm();
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(LoginForm);

export default FormikLoginForm;
