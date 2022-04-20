import { EmailValidator } from '@/presentation/protocols/invalidEmail'
export class EmailValidatorAdapter implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
