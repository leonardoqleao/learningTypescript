import { SignUpController } from '../controller/signUp'
import { EmailValidator } from './'
import { AddAccount } from '@/domain/usecases/add-account'

export interface SutTypes {
  sut: SignUpController
  emailAvalidatorStub: EmailValidator
  addAccountStub: AddAccount
}
