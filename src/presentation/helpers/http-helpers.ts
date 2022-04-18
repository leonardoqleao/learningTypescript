import { HttpResponse } from '../protocols/http'

export const badResponse = (Error: Error): HttpResponse => ({
  statusCode: 400,
  body: Error
})
