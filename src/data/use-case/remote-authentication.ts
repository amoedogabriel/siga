import { AccountModel } from '../../domain/model/account.model';
import { AuthModel } from '../../domain/model/auth.model';
import { Authentication } from '../../domain/use-case/authentication.interface';
import { HttpClient } from '../protocols/http-client.interface';

export class RemoteAuthentication implements Authentication {
  private readonly url: string;
  private readonly httpClient: HttpClient<AuthModel, AccountModel>;
  constructor(url: string, httpClient: HttpClient<AuthModel, AccountModel>) {
    this.url = url;
    this.httpClient = httpClient;
  }
  async auth(authParams: AuthModel): Promise<AccountModel> {
    await this.httpClient.request({
      url: this.url,
      body: authParams,
    });
    return null;
  }
}
