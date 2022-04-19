import { SignUpController } from '../controller/signUp'
import { EmailValidator, SutTypes } from '../protocols'

export const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

export const makeEmailValidatorWhithError = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      throw new Error()
    }
  }
  return new EmailValidatorStub()
}

export const makeSut = (): SutTypes => {
  const emailAvalidatorStub = makeEmailValidator()
  const sut = new SignUpController(emailAvalidatorStub)

  return {
    sut,
    emailAvalidatorStub
  }
}
