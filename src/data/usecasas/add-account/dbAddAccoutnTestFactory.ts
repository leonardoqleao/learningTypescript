import { Encrypter, sutTypes } from './dbAddAccountProtocols'
import { DbAddAccount } from './dbAddAccount'
import { AddAccountRepository } from '@/data/protocols/addAccountRepository'
import { AddAccountModel } from '@/domain/usecases/add-acount/addAccount'
import { AccountModel } from '@/domain/models/account'

const makeEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt (value: string): Promise<string> {
      return await new Promise(resolve => resolve('hashed_password'))
    }
  }
  return new EncrypterStub()
}

const makeAddAccountRepository = (): AddAccountRepository => {
  class AddAccountRespositoryStub implements AddAccountRepository {
    async add (account: AddAccountModel): Promise<AccountModel> {
      const fakeAccount = {
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email@email.com',
        password: 'hashed_password'
      }
      return await new Promise(resolve => resolve(fakeAccount))
    }
  }
  return new AddAccountRespositoryStub()
}

export const makeSut = (): sutTypes => {
  const encrypterStub = makeEncrypter()
  const addAccountRespositoryStub = makeAddAccountRepository()
  const sut = new DbAddAccount(encrypterStub, addAccountRespositoryStub)

  return {
    sut,
    encrypterStub,
    addAccountRespositoryStub
  }
}
