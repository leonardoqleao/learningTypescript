import { SignUpController } from './signUp'
import { EmailValidator, SutTypes, AccountModel, AddAccountModel, AddAccount } from './singup-protocols'

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
    add (account: AddAccountModel): AccountModel {
      const fakeAccount = {
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email@email.com',
        password: 'valid_password'
      }
      return fakeAccount
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
