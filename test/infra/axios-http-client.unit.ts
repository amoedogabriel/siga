import { AxiosHttpClient } from '@infra/http/axios-http-client';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AxiosHttpClient', () => {
  it('Should call Axios with correct URL', async () => {
    const sut = new AxiosHttpClient();
    await sut.request({ url: 'any_url' });
    expect(mockedAxios).toHaveBeenCalledWith('any_url');
  });
});
