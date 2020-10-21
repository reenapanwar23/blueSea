import React, { useState } from "react";
import Input from "../Input/Input";
import checkValidity from "../shared/CheckValidation";
import classes from "./formPage.module.css";
import Button from "../UI/Button/Button";
//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const FormPage = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "Your Query",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ZipCode",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your e-Mail",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "Luxury Villa", displayValue: "Luxury Villa" },
          { value: "1/2 BHK", displayValue: "1/2 BHK" },
          { value: "Events", displayValue: "Events" },
          { value: "Dining", displayValue: "Dining" },
        ],
      },
      validation: {},
      valid: true,
      value: "Luxury Villa",
      touched: false,
    },
  });
  const orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
  };
  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedorderForm = {
      ...orderForm,
    };
    const updatedFormElement = {
      ...updatedorderForm[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedorderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true; //checking validity

    for (let eachkey in updatedorderForm) {
      formIsValid = updatedorderForm[eachkey].valid && formIsValid; //checking validity
    }

    setOrderForm(updatedorderForm);
  };

  let formElementsArray = []; //to push all orderform data onto an array
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  let formDta = (
    <form onSubmit={orderHandler}>
      <h2>PLEASE FILL THE FORM</h2>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}

      {/* <button className={classes.Button}>BOOK NOW</button> */}
      <div className={classes.Button}>
        <Button labels={["BOOK NOW"]} />
      </div>
    </form>
  );

  return <div className={classes.ContactData}>{formDta}</div>;
};

export default FormPage;
