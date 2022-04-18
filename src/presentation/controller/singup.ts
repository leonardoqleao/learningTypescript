import { httpRequest, httpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missingParamErro'
import { badResponse } from '../helpers/http-helpers'

export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    // Verificação dos campos faltando, caso algum campo falte, o singup.spec vai acusar.
    const requireField = ['name', 'email']
    for (const field of requireField) {
      if (!httpRequest.body[field]) {
        return badResponse(new MissingParamError(field))
      }
    }
  }
}
