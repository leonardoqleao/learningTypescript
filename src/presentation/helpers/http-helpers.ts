import { HttpResponse } from '../protocols/http'
import { ServerError } from '../erros/serverErro'

export const badRquest = (Error: Error): HttpResponse => ({
  statusCode: 400,
  body: Error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
