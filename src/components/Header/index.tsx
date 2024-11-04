import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import {
  ActionsContainer,
  HeaderContainer,
  LocationButton,
  StyledShoppingCartLink,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logotipo" />
      <ActionsContainer>
        <LocationButton>
          <MapPin size="1.375rem" weight="fill" color="#8047f8" />
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
