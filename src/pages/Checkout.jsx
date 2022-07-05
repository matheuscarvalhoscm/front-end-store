import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import getStates from '../services/statesApi';
import '../styles/checkout/checkout.css';

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
    <main className="checkout-main-container">
      <BackPageLink pathName="/cart" />
      <section className="checkout-container">
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
      <form className="checkout-form">
        <fieldset className="checkout-customer-info">
          <legend>Informações do comprador</legend>
          <label htmlFor="full-name-input">Nome completo:</label>
          <input type="text" placeholder="Nome completo" id="full-name-input" />

          <label htmlFor="cpf-number-input">CPF:</label>
          <input type="number" placeholder="CPF" id="cpf-number" />

          <label htmlFor="email-input">Email:</label>
          <input type="email" placeholder="Email" id="email-input" />

          <label htmlFor="phone-number-input">Telefone:</label>
          <input type="tel" placeholder="Telefone" id="phone-number-input" />

          <label htmlFor="zip-code-input">CEP:</label>
          <input type="number" placeholder="CEP" id="zip-code-input" />

          <label htmlFor="address-input">Endereço:</label>
          <input type="text" placeholder="Endereço" id="address-input" />

          <label htmlFor="address-complement-input">Complemento:</label>
          <input type="text" placeholder="Complemento" id="address-complement-input" />

          <label htmlFor="address-number-input">Número:</label>
          <input type="number" placeholder="Número" id="address-number-input" />

          <label htmlFor="city-name-input">Cidade:</label>
          <input type="text" placeholder="Cidade" id="city-name-input" />

          <label htmlFor="state-input">Estado:</label>
          <select>
            {
              states.map(({ id, sigla, nome }) => (
                <option
                  key={id}
                  value={sigla}
                  id="state-input"
                >
                  {nome}
                </option>
              ))
            }
          </select>
        </fieldset>
        <fieldset className="checkout-paying-methods">
          <legend>Método de pagamento</legend>
          <label htmlFor="ticket-input">
            Boleto
            <input
              type="radio"
              value="boleto"
              name="payment-method"
              id="ticket-input"
            />
            <img src={boleto} alt="Pagamento por boleto" />
          </label>
          <label htmlFor="mastercard-input">
            Mastercard
            <input
              type="radio"
              value="mastercard"
              name="payment-method"
              id="mastercard-input"
            />
            <img
              src={masterCard}
              alt="Pagamento cartão de crédito Mastercard"
              width="50px"
            />
          </label>
          <label htmlFor="visa-input">
            Visa
            <input
              type="radio"
              value="visa"
              name="payment-method"
              id="visa-input"
            />
            <img
              src={visa}
              alt="Pagamento cartão de crédito Visa"
              width="50px"
            />
          </label>
        </fieldset>
      </form>
      <button type="button">
        Comprar
      </button>
    </main>
  );
}

export default Checkout;
