import {
  HttpClient,
  HttpParams,
  HttpResponse,
} from '@data/http/http-client.interface';
import { AccountModel } from '@business/model/account.model';
import { AuthModel } from '@business/model/auth.model';
import axios from 'axios';

export class AxiosHttpClient implements HttpClient<AuthModel, AccountModel> {
  async request(
    params: HttpParams<AuthModel>
  ): Promise<HttpResponse<AccountModel>> {
    const httpResponse = await axios.post(params.url, params.body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
