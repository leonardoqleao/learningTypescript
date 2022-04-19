import { SignUpController } from '../controller/signUp'
import { EmailValidator } from './invalidEmail'

export interface SutTypes {
  sut: SignUpController
  emailAvalidatorStub: EmailValidator
}
