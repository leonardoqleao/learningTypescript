import { HttpRequest, HttpResponse } from './'

export interface Controller {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
