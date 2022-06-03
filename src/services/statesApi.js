import axios from 'axios';

const getStates = async () => {
  const states = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  return states;
};

export default getStates;
