import styled from "styled-components";
import { LayoutContainer } from "../../layouts/DefaultLayout/styles";
import { TITLE_XS } from "../../styles/variables";

export const FormContainerStyled = styled(LayoutContainer)`
  form {
    display: grid;
    grid-template-columns: 57.1428571429% 1fr;
    column-gap: 2rem;

    h2 {
      padding-bottom: 0.9375rem;
      font: ${TITLE_XS};
      color: ${(props) => props.theme["base-800"]};
    }
  }
`;

export const CardStyled = styled.div`
  background-color: ${(props) => props.theme["base-200"]};
  padding: 2.5rem;
  border-radius: 0.375rem;
`;

export const CompleteYourOrder = styled.div``;

export const DeliveryDetailsStyled = styled(CardStyled)`
  margin-bottom: 0.75rem;
`;

export const PaymentStyled = styled(CardStyled)``;

export const ConfirmOrderStyled = styled(CardStyled)`
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
`;
