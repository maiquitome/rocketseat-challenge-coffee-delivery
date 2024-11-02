import { MapPin, ShoppingCart } from "phosphor-react";
import logo from "../../assets/logo.svg";
import { ActionsContainer, HeaderContainer, LocationButton } from "./styles";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size="1.375rem" weight="fill" color="#764D0E" />
          </NavLink>
        </nav>
      </ActionsContainer>
    </HeaderContainer>
  );
}
