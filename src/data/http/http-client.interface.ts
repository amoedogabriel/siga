export type HttpParams<P> = {
  url: string;
  body?: P;
};

export type HttpResponse<R> = {
  statusCode: number;
  body?: R;
};

export interface HttpClient<P, R> {
  request(params: HttpParams<P>): Promise<HttpResponse<R>>;
}
