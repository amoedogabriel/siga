import { HttpStatusCode } from 'axios';
import {
  HttpClient,
  HttpResponse,
  HttpParams,
} from '../protocols/http-client.interface';

export class HttpPostClientSpy<P, R> implements HttpClient<P, R> {
  url?: string;
  body?: P;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.Ok,
  };

  async request(params: HttpParams<P>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return this.response;
  }
}
