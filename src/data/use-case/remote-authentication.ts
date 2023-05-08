import { AccountModel } from '../../domain/model/account.model';
import { AuthModel } from '../../domain/model/auth.model';
import { Authentication } from '../../domain/use-case/authentication.interface';
import { InvalidCredentialsError } from '../errors/invalid-credentials.error';
import { UnexpectedError } from '../errors/unexpected.error';
import { HttpClient } from '../protocols/http-client.interface';

export class RemoteAuthentication implements Authentication {
  private readonly url: string;
  private readonly httpClient: HttpClient<AuthModel, AccountModel>;
  constructor(url: string, httpClient: HttpClient<AuthModel, AccountModel>) {
    this.url = url;
    this.httpClient = httpClient;
  }
  async auth(authParams: AuthModel): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      body: authParams,
    });
    switch (httpResponse.statusCode) {
      case 401:
        throw new InvalidCredentialsError();
      case 200:
        return null;
      default:
        throw new UnexpectedError();
    }
  }
}
