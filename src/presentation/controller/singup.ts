import { httpRequest, httpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missingParamErro'
import { badResponse } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    if (!httpRequest.body.name) {
      return badResponse(new MissingParamError('name'))
    } if (!httpRequest.body.email) {
      return badResponse(new MissingParamError('email'))
    }
  }
}
