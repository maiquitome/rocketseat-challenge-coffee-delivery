import styled from "styled-components";
import { BUTTON_M, TEXT_M } from "../../../../styles/variables";

export const ContainerStyled = styled.div`
  > div {
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      gap: 1.25rem;
      > img {
        height: 4rem;
      }
      > div {
        > p {
          font: ${TEXT_M};
          color: ${(props) => props.theme["base-800"]};
        }
        > div {
          display: flex;
          gap: 0.5rem;
          > button {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            padding: 0.5rem;

            border: none;
            border-radius: 0.375rem;
            background-color: ${(props) => props.theme["base-400"]};

            color: ${(props) => props.theme["secondary-500"]};
            &:hover {
              background-color: ${(props) => props.theme["base-500"]};
            }
            > span {
              font: ${BUTTON_M};
              color: ${(props) => props.theme["base-800"]};
            }
          }
        }
      }
    }
    > span {
      font: ${TEXT_M};
      font-weight: bold;
      line-height: 1;
      color: ${(props) => props.theme["base-700"]};
    }
  }
`;

export const Line = styled.div`
  padding: 0 !important;
  margin-block: 1.5rem !important;
  height: 0.0625rem !important;
  width: 100%;
  background-color: ${(props) => props.theme["base-400"]};
`;
