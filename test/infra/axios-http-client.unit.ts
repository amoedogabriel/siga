import { AxiosHttpClient } from '@infra/http/axios-http-client';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockResolvedValue({
  status: 201,
  data: 'any_data',
});

const account = {
  email: 'valid_mail@mail.com',
  password: 'valid_password',
};

type SutTypes = {
  sut: AxiosHttpClient;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  return {
    sut,
  };
};

describe('AxiosHttpClient', () => {
  it('Should call Axios with correct URL and Body', async () => {
    const { sut } = makeSut();
    await sut.request({ url: 'any_url', body: account });
    expect(mockedAxios.post).toHaveBeenCalledWith('any_url', account);
  });

  it('Should return correct statusCode and Body', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.request({ url: 'any_url', body: account });
    expect(httpResponse).toEqual({
      statusCode: 201,
      body: 'any_data',
    });
  });
});
