import { LayoutContainer } from "../../layouts/DefaultLayout/styles";
import { Background, Hero, HeroItems, TextContainer } from "./styles";
import heroCoffee from "../../assets/hero-coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Home() {
  const theme = useTheme();

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
            <HeroItems>
              <div>
                <ShoppingCart
                  size="2rem"
                  weight="fill"
                  color={theme["base-100"]}
                  style={{ backgroundColor: theme["primary-800"] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size="2rem"
                  weight="fill"
                  color={theme["base-100"]}
                  style={{ backgroundColor: theme["base-700"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size="2rem"
                  weight="fill"
                  color={theme["base-100"]}
                  style={{ backgroundColor: theme["primary-600"] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size="2rem"
                  weight="fill"
                  color={theme["base-100"]}
                  style={{ backgroundColor: theme["secondary-500"] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </HeroItems>
          </TextContainer>
          <img src={heroCoffee} alt="coffee cup" />
        </Hero>
      </LayoutContainer>
    </Background>
  );
}
