import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import getStates from '../services/statesApi';

import boleto from '../icons/boleto.svg';
import masterCard from '../icons/mastercard.svg';
import visa from '../icons/visa.svg';
import BackPageLink from '../components/backPageLink/backPageLink';

function Checkout() {
  const { cart } = useContext(AppContext);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const { data } = await getStates();
      setStates(data);
    };

    fetchStates();
  }, []);

  const totalValue = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);

  if (cart.length < 1) {
    return (
      <main>
        <BackPageLink pathName="/" />
        <h1>Seu carrinho está vazio :(</h1>
      </main>
    );
  }

  return (
    <main>
      <BackPageLink pathName="/cart" />
      <section>
        <h2>Revise seu pedido</h2>
        <ul>
          {
            cart.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
                <p>{`R$ ${product.quantity * product.price}`}</p>
              </li>
            ))
          }
        </ul>
        <p>{`Total: R$ ${totalValue}`}</p>
      </section>
      <form>
        <h2>Informações do comprador</h2>
        <input type="text" placeholder="Nome completo" />
        <input type="number" placeholder="CPF" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Telefone" />
        <input type="number" placeholder="CEP" />
        <input type="text" placeholder="Endereço" />
        <input type="text" placeholder="Complemento" />
        <input type="number" placeholder="Número" />
        <input type="text" placeholder="Cidade" />
        <select>
          {
            states.map(({ id, sigla, nome }) => <option key={id} value={sigla}>{nome}</option>)
          }
        </select>
        <section>
          <h2>Método de pagamento</h2>
          <input type="radio" value="boleto" name="payment-method" />
          <img src={boleto} alt="Pagamento por boleto" />
          <input type="radio" value="mastercard" name="payment-method" />
          <img src={masterCard} alt="Pagamento cartão de crédito Mastercard" width="50px" />
          <input type="radio" value="visa" name="payment-method" />
          <img src={visa} alt="Pagamento cartão de crédito Visa" width="50px" />
        </section>
      </form>
      <button type="button">
        Comprar
      </button>
    </main>
  );
}

export default Checkout;
