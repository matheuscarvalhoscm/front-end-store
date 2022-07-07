import React from 'react';
import { useHistory } from 'react-router-dom';
import notFound from '../../icons/not-found.png';

function NotFound() {
  const history = useHistory();

  return (
    <section className="page-not-found">
      <img src={notFound} alt="This page does not exist" />
      <h1>Opa! Você se perdeu na loja e entrou em uma página que não existe.</h1>
      <button
        type="button"
        onClick={() => history.push('/')}
      >
        Voltar para loja
      </button>
    </section>
  );
}

export default NotFound;
