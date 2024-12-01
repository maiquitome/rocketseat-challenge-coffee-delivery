import { ChangeEvent, useState } from "react";
import {
  ConfirmOrderStyled,
  DeliveryDetailsStyled,
  FormContainerStyled,
  PaymentStyled,
} from "./style";
import { MapPinLine } from "phosphor-react";

export function Checkout() {
  const [cepValue, setCep] = useState("");

  function applyCepMask(cep: string) {
    const onlyNumbers = cep.replace(/\D/g, "");
    const noMoreThanEightCharacters = onlyNumbers.substring(0, 8);
    cep = noMoreThanEightCharacters;

    if (cep.length === 8) {
      cep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }

    return cep;
  }

  function setCepWithMask(event: ChangeEvent<HTMLInputElement>) {
    const cepWithMask = applyCepMask(event.target.value);
    console.log("cepWithMask", cepWithMask);
    setCep(cepWithMask);
  }

  return (
    <FormContainerStyled>
      <form action="">
        <div>
          <h2>Complete seu pedido</h2>
          <DeliveryDetailsStyled>
            <fieldset>
              <div>
                <MapPinLine className="mapPinLineIcon" size="1.375rem" />
                <div>
                  <legend>Endereço de Entrega</legend>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  placeholder="CEP"
                  onChange={setCepWithMask}
                  value={cepValue}
                />
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Rua"
                />
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Número"
                />
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  placeholder="Complemento"
                />
                <input
                  type="text"
                  name="neighbourhood"
                  id="neighbourhood"
                  placeholder="Bairro"
                />
                <input type="text" name="city" id="city" placeholder="Cidade" />
                <input type="text" name="state" id="state" placeholder="UF" />
              </div>
            </fieldset>
          </DeliveryDetailsStyled>

          <PaymentStyled>
            <fieldset>
              <legend>Pagamento</legend>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </fieldset>
          </PaymentStyled>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <ConfirmOrderStyled>
            <button>CONFIRMAR PEDIDO</button>
          </ConfirmOrderStyled>
        </div>
      </form>
    </FormContainerStyled>
  );
}
