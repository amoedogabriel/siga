import { AccountModel } from '../../domain/model/account.model';
import { AuthModel } from '../../domain/model/auth.model';
import { HttpPostClientSpy } from '../mock/mock-http-post-client';
import { RemoteAuthentication } from '../../../src/data/use-case/remote-authentication';
import { InvalidCredentialsError } from '../../../src/data/errors/invalid-credentials.error';
import { HttpStatusCode } from 'axios';

const account = {
  email: 'valid_mail@mail.com',
  password: 'valid_password',
};

type SutTypes = {
  sut: RemoteAuthentication;
  httpClient: HttpPostClientSpy<AuthModel, AccountModel>;
};

const makeSut = (url = 'any_url'): SutTypes => {
  const httpClient = new HttpPostClientSpy<AuthModel, AccountModel>();
  const sut = new RemoteAuthentication(url, httpClient);
  return { sut, httpClient };
};

describe('RemoteAuthentication', () => {
  it('Should call HttpPostClient with correct URL', async () => {
    const { sut, httpClient } = makeSut();
    await sut.auth(null);
    expect(httpClient.url).toBe('any_url');
  });

  it('Should call HttpPostClient with correct Body', async () => {
    const { sut, httpClient } = makeSut();
    await sut.auth(account);
    expect(httpClient.body).toEqual(account);
  });

  it('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpClient } = makeSut();
    httpClient.response = {
      statusCode: HttpStatusCode.Unauthorized,
    };
    const promise = sut.auth(account);
    expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
