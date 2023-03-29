import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES_CLASSES.base}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
