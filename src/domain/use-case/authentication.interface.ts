import { AccountModel } from '../model/account.model';
import { AuthModel } from '../model/auth.model';

export interface Authentication {
  auth(data: AuthModel): Promise<AccountModel>;
}
