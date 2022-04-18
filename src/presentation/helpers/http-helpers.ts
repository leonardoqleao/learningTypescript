import { httpResponse } from '../protocols/http'

export const badResponse = (Error: Error): httpResponse => ({
  statusCode: 400,
  body: Error
})
