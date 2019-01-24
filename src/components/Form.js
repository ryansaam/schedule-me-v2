import React from 'react';
import '../Form.css'
import { Formik, Form, Field } from 'formik';

const input1 = ({ field, form }) => { return (
  <div className="inputs">
    <label>
      First Name
      <br/>
      <input type="text" {...field} placeholder="John"/>
    </label>
  </div>
)}
const input2 = ({ field, form }) => { return (
  <div className="inputs">
    <label>
      Last Name
      <br/>
      <input type="text" {...field} placeholder="Doe"/>
    </label>
  </div>
)}
const input3 = ({ field, form }) => { return (
  <div className="inputs">
    <label>
      Phone
      <br/>
      <input type="number" {...field} placeholder="000-000-0000"/>
    </label>
  </div>
)}

const MyForm = ({weekDay,month,date}) => (
  <div id="sch-form" className="form-container">
    <h1 className="form-header">Scheduling on</h1>
    <h1 className="form-header">{`${weekDay}, ${month} ${date}`}</h1>
    <Formik
      initialValues={{ firstName: '', lastName: '', number: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="firstName">
            {input1}
          </Field>
          <Field name="lastName" >
            {input2}
          </Field>
          <Field name="number" >
            {input3}
          </Field>
          <div className="button-container">
            <button className="description-btn">
              <div className="shine"></div>
              <span>Book!</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default MyForm;