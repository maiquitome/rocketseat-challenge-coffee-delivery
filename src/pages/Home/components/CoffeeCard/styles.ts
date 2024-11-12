import { styled } from "styled-components";
import { TAG, TEXT_S, TITLE_M, TITLE_S } from "../../../../styles/variables";

export const CoffeeCardStyled = styled.div`
  background-color: ${(props) => props.theme["base-200"]};
  height: 19.375rem;
  min-width: 16rem;
  border-radius: 2rem 0.375rem 2rem 0.375rem;
  text-align: center;
  padding-inline: 1.25rem;

  > img {
    display: block;
    margin: auto;
    margin-top: -1.25rem;
    height: 7.5rem;
  }
  > h2 {
    font: ${TITLE_S};
    color: ${(props) => props.theme["base-800"]};
    padding-top: 1rem;
  }
  > p {
    font: ${TEXT_S};
    color: ${(props) => props.theme["base-600"]};
    padding-top: 0.5rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  padding-top: 0.75rem;
  > small {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    background-color: ${(props) => props.theme["primary-200"]};

    font: ${TAG};
    color: ${(props) => props.theme["primary-800"]};
    text-transform: uppercase;
  }
`;

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.0625rem;
  > div {
    display: flex;
    gap: 0.5rem;
    > button {
      border: 0;
      padding: 0;
      border-radius: 0.375rem;
      background-color: ${(props) => props.theme["secondary-700"]};
      width: 2.375rem;

      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: ${(props) => props.theme["secondary-500"]};
      }
      color: ${(props) => props.theme["base-200"]};
    }
  }
`;

export const Price = styled.span`
  display: flex;
  font: ${TITLE_M};
  color: ${(props) => props.theme["base-700"]};
  > small {
    font: ${TEXT_S};
    align-self: center;
    padding-right: 0.2rem;
  }
`;

export const Actions = styled.div`
  display: flex;
`;
