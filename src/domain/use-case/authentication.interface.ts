import { AccountModel } from '@domain/model/account.model';
import { AuthModel } from '@domain/model/auth.model';

export interface Authentication {
  auth(data: AuthModel): Promise<AccountModel>;
}
