import { SignUpController } from './signUp'
import { EmailValidator, SutTypes, AccountModel, AddAccountModel, AddAccount } from './singupProtocols'

export const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

export const makeAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountModel): Promise<AccountModel> {
      const fakeAccount = {
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email@email.com',
        password: 'valid_password'
      }
      return await new Promise(resolve => resolve(fakeAccount))
    }
  }
  return new AddAccountStub()
}

export const makeSut = (): SutTypes => {
  const emailAvalidatorStub = makeEmailValidator()
  const addAccountStub = makeAddAccount()
  const sut = new SignUpController(emailAvalidatorStub, addAccountStub)

  return {
    sut,
    emailAvalidatorStub,
    addAccountStub
  }
}
