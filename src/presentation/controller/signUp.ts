import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missingParamErro'
import { badResponse } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    // Verificação dos campos faltando, caso algum campo falte, o singup.spec vai acusar.
    const requireField = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requireField) {
      if (!httpRequest.body[field]) {
        return badResponse(new MissingParamError(field))
      }
    }
  }
}
