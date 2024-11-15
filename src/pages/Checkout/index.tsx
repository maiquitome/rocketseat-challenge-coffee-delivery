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

              <input type="number" name="cep" id="cep" placeholder="CEP" />
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
