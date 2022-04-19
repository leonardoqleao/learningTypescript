import { HttpRequest, HttpResponse, Controller, EmailValidator, AddAccount } from './singup-protocols'
import { MissingParamError, InvalidParamError } from '../../erros'
import { badRquest, serverError, ok } from '../../helpers/http-helpers'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor (emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // Verificação dos campos faltando, caso algum campo falte, o singup.spec vai acusar.
      const requireField = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requireField) {
        if (!httpRequest.body[field]) {
          return badRquest(new MissingParamError(field))
        }
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRquest(new InvalidParamError('invalid_passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRquest(new InvalidParamError('invalid_email'))
      }
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError()
    }
  }
}
