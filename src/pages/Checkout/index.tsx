import {
  ConfirmOrderStyled,
  DeliveryDetailsStyled,
  FormContainerStyled,
  PaymentStyled,
} from "./style";

export function Checkout() {
  return (
    <FormContainerStyled>
      <form action="">
        <div>
          <h2>Complete seu pedido</h2>
          <DeliveryDetailsStyled>
            <fieldset>
              <legend>Endereço de Entrega</legend>
              <p>Informe o endereço onde deseja receber seu pedido</p>

              <div>
                <input type="number" name="cep" id="cep" placeholder="CEP" />
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
