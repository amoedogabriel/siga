import { AccountModel } from '../../domain/model/account.model';
import { AuthModel } from '../../domain/model/auth.model';
import { HttpPostClientSpy } from '../mock/mock-http-post-client';
import { RemoteAuthentication } from '../../../src/data/use-case/remote-authentication';

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
    const { sut, httpClient } = makeSut('any_url');
    await sut.auth(null);
    expect(httpClient.url).toBe('any_url');
  });
});
