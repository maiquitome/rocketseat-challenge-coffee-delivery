import styled from "styled-components";
import { TEXT_S } from "../../styles/variables";
import { NavLink } from "react-router-dom";
import { MapPin } from "phosphor-react";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-block: 2rem;

  img[src$="logo.svg"] {
    height: 2.5rem;
    display: block;
  }
`;

export const StyledShoppingCartLink = styled(NavLink).attrs((props) => ({
  className: props.className,
}))`
  text-decoration: none;
  background-color: ${(props) => props.theme["primary-200"]};
  padding: 0.5rem;
  line-height: 0;
  display: block;
  border-radius: 0.5rem;
  .shoppingCartIcon {
    color: ${(props) => props.theme["primary-800"]};
  }
  &:hover {
    background-color: ${(props) => props.theme["primary-800"]};
    .shoppingCartIcon {
      color: ${(props) => props.theme["primary-200"]};
    }
  }
`;

// export const StyledShoppingCart = styled(ShoppingCart)`
//   color: ${(props) => props.theme["primary-800"]};
//   &:hover {
//     color: ${(props) => props.theme["primary-200"]};
//   }
// `;

export const StyledMapPinIcon = styled(MapPin)`
  color: ${(props) => props.theme["secondary-500"]};
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  /* height: 2.375rem; */
`;

export const LocationButton = styled.button`
  border: 0;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["secondary-200"]};

  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  font: ${TEXT_S};
  color: ${(props) => props.theme["secondary-700"]};
`;
