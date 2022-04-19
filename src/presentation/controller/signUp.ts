import { HttpRequest, HttpResponse } from '../protocols/http'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/invalidEmail'
import { MissingParamError, InvalidParamError } from '../erros'
import { badRquest, serverError } from '../helpers/http-helpers'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      // Verificação dos campos faltando, caso algum campo falte, o singup.spec vai acusar.
      const requireField = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requireField) {
        if (!httpRequest.body[field]) {
          return badRquest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) {
        return badRquest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
