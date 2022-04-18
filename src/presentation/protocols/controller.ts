import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  handle (httpRequest: HttpRequest): HttpResponse
}
