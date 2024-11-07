import { LayoutContainer } from "../../layouts/DefaultLayout/styles";
import { Background, Hero, TextContainer } from "./styles";
import heroCoffee from "../../assets/hero-coffee.svg";

export function Home() {
  return (
    <Background>
      <LayoutContainer>
        <Hero>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TextContainer>
          <img src={heroCoffee} alt="coffee cup" />
        </Hero>
      </LayoutContainer>
    </Background>
  );
}
