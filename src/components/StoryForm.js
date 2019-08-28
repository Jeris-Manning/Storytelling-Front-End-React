import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormTitle = styled.h1`
  font-family: 'Finger Paint', cursive;
  font-size: 3rem;
  color: #faa220;
  text-shadow: 2px 2px 4px #c64f18;
  margin: 0;
`;

const TextField = styled.div`
  background-color: #14b1ab;
  max-width: 500px;
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px;
  border: solid 4px #107ba3;

  input[type='text'],
  input::after,
  textarea {
    background-color: #3a3480;
    border: 4px solid #faa220;
    color: white;
  }
  input::placeholder,
  select,
  textarea::placeholder {
    color: #14b1ab;
    background-color: #3a3480;
  }

  input,
  select {
    width: 250px;
  }

  textarea {
    width: 400px;
    height: 200px;
    border: 4px solid #c0326a;
  }

  select {
    border: 4px solid #c0326a;
  }

  input,
  select,
  textarea {
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
    margin: 5px;
  }
`;


function StoryForm({ errors, touched }) {
  return (
    <Form>
      <TextField>
        <FormTitle>Share Your Story!</FormTitle>

        <div>
          {touched.title && errors.title && <p>{errors.title}</p>}
          <Field type='text' name='title' placeholder='Story Title' />
        </div>

        <div>
          {!touched.country && <p>{errors.country}</p>}
          <Field name='country' component='select' placeholder='Country'>
            <option value='bolivia'>Bolivia</option>
            <option value='brazil'>Brazil</option>
            <option value='cambodia'>Cambodia</option>
            <option value='colombia'>Colombia</option>
            <option value='ecuador'>Ecuador</option>
            <option value='el salvador'>El Salvador</option>
            <option value='ghana'>Ghana</option>
            <option value='guatemala'>Guatemala</option>
            <option value='haiti'>Haiti</option>
            <option value='honduras'>Honduras</option>
            <option value='kiribati'>Kiribati</option>
            <option value='madagascar'>Madagascar</option>
            <option value='mongolia'>Mongolia</option>
            <option value='nicaragua'>Nicaragua</option>
            <option value='paraguay'>Paraguay</option>
            <option value='peru'>Peru</option>
            <option value='philippines'>Philippines</option>
            <option value='sierra leone'>Sierra Leone</option>
            <option value='zimbabwe'>Zimbabwe</option>
          </Field>
        </div>

        <div>
          {touched.description && errors.description && (
            <p>{errors.description}</p>
          )}
          <Field
            type='text'
            name='description'
            placeholder='Story Description'
          />
        </div>

        <div>
          {touched.content && errors.content && <p>{errors.content}</p>}
          <Field
            component='textarea'
            name='content'
            placeholder='Story Content'
          />
        </div>
        <button>Submit Story</button>
      </TextField>
      
    </Form>
  );
}

const FormikStorySubmitForm = withFormik({
  mapPropsToValues({ title, country, description, content }) {
    return {
      title: title || '',
      country: country || '',
      description: description || '',
      content: content || ''
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required('*'),
    country: Yup.string().required('*'),
    description: Yup.string().required('*'),
    content: Yup.string().required('*')
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
   console.log(values)
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token
      }
    };

    {
      axios
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        .post(
          'https://storytelling-back-end.herokuapp.com/api/stories/user/stories',
          values,
          config
        )
        .then((res) => {
          console.log(res);

          resetForm();
          setSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
        });
    }
  }
})(StoryForm);
// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API
// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API
// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API

export default FormikStorySubmitForm;

// title country description date
