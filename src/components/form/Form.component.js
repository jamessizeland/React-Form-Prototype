import React from "react";
// import Form2 from "./Form2.component";
import { FormText, FormCheckBox, FormDropdown } from "./FormInputs.component";
import { Form, Formik } from "formik";
import * as Yup from "yup";
/*********************************************
Test that we can 
- create a form over multiple components
- validate that form's schema with numbers and strings
- pass in default data
- submit a JSON object
*********************************************/

function FormTest({ config }) {
  return (
    <div>
      <Formik
        initialValues={{
          name: config.name,
          email: config.email,
          acceptedTerms: false,
          age: 0,
          specialPower: config.specialPower,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(15, "Must be 15 characters or fewer")
            .required("Required Field"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required Field"),
          acceptedTerms: Yup.boolean()
            .required("Required Field")
            .oneOf([true], "You must accept the terms and conditions"),
          //   age: Yup.number()
          //     .required("Required Field")
          //     .positive("Age must be a positive number"),
          specialPower: Yup.string()
            .oneOf(
              ["flight", "invisibility", "strength", "speed"],
              "Invalid special power"
            )
            .required("Required Field"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submitted");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign Up Form</h1>
            <FormText
              label="Name"
              name="name"
              type="text"
              placeholder="Frank"
            />
            <FormText
              label="Email"
              name="email"
              type="email"
              placeholder="example@example.com"
            />
            <FormDropdown label="Special Power" name="specialPower">
              <option value="">Select a Special Power</option>
              <option value="flight">flight</option>
              <option value="invisibility">invisibility</option>
              <option value="strength">super strength</option>
              <option value="speed">super speed</option>
            </FormDropdown>
            <FormCheckBox name="acceptedTerms">
              I accept the terms and conditions
            </FormCheckBox>
            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormTest;
