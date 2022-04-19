import { SignUpController } from '../controller/signup/signUp'
import { EmailValidator } from './invalidEmail'
import { AddAccount } from '@/domain/usecases/add-account'

export interface SutTypes {
  sut: SignUpController
  emailAvalidatorStub: EmailValidator
  addAccountStub: AddAccount
}
