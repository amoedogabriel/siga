import { AccountModel } from '@business/model/account.model';
import { AuthModel } from '@business/model/auth.model';

export interface Authentication {
  auth(data: AuthModel): Promise<AccountModel>;
}
