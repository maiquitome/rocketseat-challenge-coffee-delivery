import styled from "styled-components";
import { TEXT_M } from "../../styles/variables";

export const CounterContainer = styled.span.attrs((props) => ({
  className: props.className,
}))`
  height: 2.375rem;
  min-width: 4.5rem;
  background-color: ${(props) => props.theme["base-400"]};
  border-radius: 0.375rem;
  padding-inline: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.21875rem;

  > span {
    font: ${TEXT_M};
    color: ${(props) => props.theme["base-900"]};
  }

  > button.actionIcon {
    display: flex;

    border: 0;
    background: transparent;
    color: ${(props) => props.theme["secondary-500"]};
    :hover {
      color: ${(props) => props.theme["secondary-700"]};
    }
  }
`;
