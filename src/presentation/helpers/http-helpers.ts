import { HttpResponse } from '../protocols/http'

export const badRquest = (Error: Error): HttpResponse => ({
  statusCode: 400,
  body: Error
})
