import { DbAddAccount } from '../usecasas/add-account/dbAddAccount'
import { AddAccountRepository } from './addAccountRepository'
import { Encrypter } from './encrypter'

export interface sutTypes {
  sut: DbAddAccount
  encrypterStub: Encrypter
  addAccountRespositoryStub: AddAccountRepository
}
