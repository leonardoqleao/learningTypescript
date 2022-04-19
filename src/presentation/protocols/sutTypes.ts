import { SignUpController } from '../controller/signUp'
import { EmailValidator } from './'

export interface SutTypes {
  sut: SignUpController
  emailAvalidatorStub: EmailValidator
}
