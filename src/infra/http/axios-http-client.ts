import {
  HttpClient,
  HttpParams,
  HttpResponse,
} from '@data/protocols/http-client.interface';
import { AccountModel } from '@domain/model/account.model';
import { AuthModel } from '@domain/model/auth.model';
import axios from 'axios';

export class AxiosHttpClient implements HttpClient<AuthModel, AccountModel> {
  async request(
    params: HttpParams<AuthModel>
  ): Promise<HttpResponse<AccountModel>> {
    await axios(params.url);
    return null;
  }
}
