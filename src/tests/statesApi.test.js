import * as axios from 'axios';
import getStates from '../services/statesApi';
import statesMock from './mocks/statesApiResponse';

jest.mock('axios');

describe('Test states API call', () => {
  it('Should return the correct information', async () => {
    axios.get.mockImplementation(() => Promise.resolve(statesMock));
    const statesResponse = await getStates();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    expect(statesResponse).toEqual(statesMock);
  });
});
