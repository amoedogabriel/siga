import { AccountModel } from '@business/model/account.model';
import { AuthModel } from '@business/model/auth.model';
import { Authentication } from '@business/use-case/authentication.interface';
import { InvalidCredentialsError, UnexpectedError } from '@data/errors';
import { HttpClient } from '@data/http/http-client.interface';

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
      case 201:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}
