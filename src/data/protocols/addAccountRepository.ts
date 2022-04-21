import { AccountModel } from '@/domain/models/account'
import { AddAccountModel } from '@/domain/usecases/add-acount/addAccount'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
