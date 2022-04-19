import { HttpResponse } from '../protocols'
import { ServerError } from '../erros'

export const badRquest = (Error: Error): HttpResponse => ({
  statusCode: 400,
  body: Error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
