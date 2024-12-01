import styled from "styled-components";
import { LayoutContainer } from "../../layouts/DefaultLayout/styles";
import { TEXT_M, TEXT_S, TITLE_XS } from "../../styles/variables";

export const FormContainerStyled = styled(LayoutContainer).attrs((props) => ({
  className: props.className,
}))`
  form {
    display: grid;
    grid-template-columns: 57.1428571429% 1fr;
    column-gap: 2rem;

    h2 {
      padding-bottom: 0.9375rem;
      font: ${TITLE_XS};
      color: ${(props) => props.theme["base-800"]};
    }

    fieldset {
      border: none;
      legend {
        font: ${TEXT_M};
        color: ${(props) => props.theme["base-800"]};
      }
      p {
        font: ${TEXT_S};
        color: ${(props) => props.theme["base-700"]};
        padding-bottom: 2rem;
      }
      > div:first-child {
        display: flex;
        gap: 0.5rem;
        .mapPinLineIcon {
          color: ${(props) => props.theme["primary-800"]};
        }
        .currencyDollarIcon {
          color: ${(props) => props.theme["secondary-500"]};
        }
      }
      > div:last-child {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr 10.7142857143%;
        input {
          border: none;
          font: ${TEXT_S};
          color: ${(props) => props.theme["base-700"]};
          background-color: ${(props) => props.theme["base-300"]};
          border: 0.0625rem solid ${(props) => props.theme["base-400"]};
          border-radius: 0.25rem;
          padding: 0.75rem;
          &::placeholder {
            color: ${(props) => props.theme["base-600"]};
          }
          &:first-child {
            grid-column-start: 1;
            grid-column-end: 2;
          }
          &:nth-child(2) {
            grid-column-start: 1;
            grid-column-end: 4;
          }
          &:nth-child(3) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
          &:nth-child(4) {
            grid-column-start: 2;
            grid-column-end: 4;
          }
          &:nth-child(5) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
          &:nth-child(6) {
            grid-column-start: 2;
            grid-column-end: 3;
          }
          &:last-child {
            grid-column-start: 3;
            grid-column-end: 4;
          }
        }
      }
    }
  }
  @media (max-width: 70rem) {
    form {
      fieldset {
        > div {
          display: flex;
          flex-direction: column;
        }
      }
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
