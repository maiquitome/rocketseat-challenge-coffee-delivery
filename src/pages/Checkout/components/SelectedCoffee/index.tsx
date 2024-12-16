import { Counter } from "../../../../components/Counter";
import coffeeImg from "../../../../assets/coffees/american-espresso-coffee.svg";
import { ContainerStyled, Line } from "./style";
import { Trash } from "phosphor-react";

export function SelectedCoffee() {
  return (
    <ContainerStyled>
      <div>
        <div>
          <img src={coffeeImg} alt="" />
          <div>
            <p>Expresso Tradicional</p>
            <div>
              <Counter />
              <button type="button">
                <Trash size="1rem" />
                <span>REMOVER</span>
              </button>
            </div>
          </div>
        </div>
        <span>R$ 9,90</span>
      </div>
      <Line />
    </ContainerStyled>
  );
}
