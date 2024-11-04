import { ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import {
  ActionsContainer,
  HeaderContainer,
  LocationButton,
  StyledMapPinIcon,
  StyledShoppingCartLink,
} from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="logotipo" />
      </NavLink>
      <ActionsContainer>
        <LocationButton>
          <StyledMapPinIcon size="1.375rem" weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <nav>
          <StyledShoppingCartLink to="/checkout" title="Checkout">
            <ShoppingCart
              className="shoppingCartIcon"
              size="1.375rem"
              weight="fill"
            />
          </StyledShoppingCartLink>
        </nav>
      </ActionsContainer>
    </HeaderContainer>
  );
}
